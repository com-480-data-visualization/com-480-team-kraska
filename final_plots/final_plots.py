import pandas as pd
import matplotlib.pyplot as plt

col_name = ['FL_DATE','AIRLINE','AIRLINE_DOT','AIRLINE_CODE','DOT_CODE','FL_NUMBER','ORIGIN','ORIGIN_CITY',
            'DEST','DEST_CITY','CRS_DEP_TIME','DEP_TIME','DEP_DELAY','TAXI_OUT','WHEELS_OFF','WHEELS_ON',
            'TAXI_IN','CRS_ARR_TIME','ARR_TIME','ARR_DELAY','CANCELLED','CANCELLATION_CODE','DIVERTED',
            'CRS_ELAPSED_TIME','ELAPSED_TIME','AIR_TIME','DISTANCE','DELAY_DUE_CARRIER','DELAY_DUE_WEATHER',
            'DELAY_DUE_NAS','DELAY_DUE_SECURITY','DELAY_DUE_LATE_AIRCRAFT']

flights = pd.read_csv('/Users/ioannatsakalidou/Downloads/flights_sample_3m.csv', names=col_name)

if flights.iloc[0].FL_DATE == 'FL_DATE':
    flights = flights[1:]

flights = flights[flights['AIRLINE_CODE'] == 'DL'].copy()

flights['FL_DATE'] = pd.to_datetime(flights['FL_DATE'], errors='coerce')
flights['DEP_DELAY'] = pd.to_numeric(flights['DEP_DELAY'], errors='coerce')
flights['ARR_DELAY'] = pd.to_numeric(flights['ARR_DELAY'], errors='coerce')
flights['CRS_DEP_TIME'] = pd.to_numeric(flights['CRS_DEP_TIME'], errors='coerce')

flights['DEP_HOUR'] = flights['CRS_DEP_TIME'] // 100
flights['DAY_OF_WEEK'] = flights['FL_DATE'].dt.day_name()

flights = flights.dropna(subset=['DEP_DELAY'])

# ----------- 1. By Origin Airport -----------
airport_delay = flights.groupby('ORIGIN')['DEP_DELAY'].mean().sort_values(ascending=False).head(10)

# ----------- 2. By Arrival Airport -----------
arrvial_delay = flights.groupby('DEST')['ARR_DELAY'].mean().sort_values(ascending=False).head(10)

# ----------- 3. By Day of Week -----------
dow_delay = flights.groupby('DAY_OF_WEEK')['DEP_DELAY'].mean().reindex(
    ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
)

# ----------- 4. By Hour of Day -----------
hour_delay = flights.groupby('DEP_HOUR')['DEP_DELAY'].mean().sort_index()

# ---------- Plot All 3 ----------
fig, axes = plt.subplots(4, 1, figsize=(12, 14))

# 1. Origin Airports
airport_delay.plot(kind='bar', ax=axes[0], color='crimson')
axes[0].set_title('Top 10 Most Delayed Departure Airports')
axes[0].set_ylabel('Avg Departure Delay (min)')
axes[0].grid(True, axis='y', linestyle='--', alpha=0.6)

# 2. Arrival Airports
arrvial_delay.plot(kind='bar', ax=axes[1], color='orange')
axes[1].set_title('Top 10 Most Delayed Arrival Airports')
axes[1].set_ylabel('Avg Departure Delay (min)')
axes[1].grid(True, axis='y', linestyle='--', alpha=0.6)

# 3. Day of Week
dow_delay.plot(kind='bar', ax=axes[2], color='darkblue')
axes[2].set_title('Departure Delay by Day of Week')
axes[2].set_ylabel('Avg Delay (min)')
axes[2].grid(True, axis='y', linestyle='--', alpha=0.6)

# 4. Hour of Day
hour_delay.plot(kind='bar', ax=axes[3], color='darkgreen')
axes[3].set_title('Departure Delay by Hour of Day')
axes[3].set_xlabel('Hour (0–23)')
axes[3].set_ylabel('Avg Delay (min)')
axes[3].grid(True, axis='y', linestyle='--', alpha=0.6)

plt.tight_layout()
plt.show()