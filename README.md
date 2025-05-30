# Project of Data Visualization (COM-480)

| Student's name | SCIPER |
| -------------- | ------ |
| Tsakalidou Ioanna | 369536|
| Jiang Yi| 376627 |
| Lebedev Georgiy Konstantinovich| 387265|

[Milestone 1](#milestone-1) • [Milestone 2](#milestone-2) • [Milestone 3](#milestone-3)

## Milestone 1

### Dataset

# Visualizing Airline Flight Delay and Cancellation Data

**Authors**: Lebedev Georgiy Konstantinovich, Jiang Yi, Tsakalidou Ioanna  
**Course**: Data Visualization, Milestone 1  

---

## 1. Dataset

We will explore the **Airline Flight Delay and Cancellation Data** from the **U.S. Department of Transportation's Bureau of Transportation Statistics**. This dataset contains comprehensive information about domestic flights operated by major air carriers in the United States, covering the period from **August 2019 to August 2023**.  

The dataset can be found at:  
[U.S. Department of Transportation - Bureau of Transportation Statistics](https://www.transtats.bts.gov/)

### **Dataset Features**
For every flight, the dataset contains the following fields:

> - **FlightDate**  
> - **Reporting_Airline**  
> - **Flight_Number_Reporting_Airline**  
> - **Origin & OriginCityName**  
> - **Dest & DestCityName**  
> - **CRSDepTime**  
> - **DepTime**  
> - **DepDelay** (early departures show negative numbers)  
> - **TaxiOut**  
> - **CRSArrTime**  
> - **ArrTime**  
> - **ArrDelay** (early arrival shows negative numbers)  
> - **TaxiIn**  
> - **CRSElapsedTime**  
> - **ActualElapsedTime**  
> - **AirTime**  
> - **Cancelled**  
> - **CancellationCode**  
> - **Diverted**  
> - **CarrierDelay**  
> - **WeatherDelay**  
> - **NASDelay**  
> - **SecurityDelay**  
> - **LateAircraftDelay**  

The complete dataset consists of approximately **29 million rows**, which is too large for interactive visualization.  

Therefore, we will work with a **reduced version containing about 3 million rows**, which still provides a comprehensive view of flight patterns while being computationally manageable.

### **Data Preprocessing**
Some preprocessing will be required to address potential issues in the data:

> - Handling missing values, especially in delay reason attributions  
> - Converting time formats for consistency  
> - Creating derived fields such as **delay categories** and **seasonal indicators**  
> - Merging with supplementary data such as **airport geographic coordinates** for mapping purposes  

---
### Problematic

Our objective is to develop a **data visualization tool** that enables users to analyze patterns in **flight delays and cancellations in the United States**. The tool will allow users to explore how various factors—such as **time of year, day of the week, carrier, route, and weather conditions**—affect flight reliability and performance.

### **Target Audience**
Our tool is designed for **anyone interested in aviation data**, including:

> - **Passengers** optimizing their flight booking decisions based on historical reliability data  
> - **Data analysts** investigating airline performance trends  
> - **Aviation agencies** proposing better air traffic control and operational rules  
> - **Frequent travelers** determining the best days/times to fly based on delay probabilities  
> - **Airline operators** analyzing seasonal variations in flight performance  

### **Key Visualizations**
Our tool will feature the following interactive visualizations:

> - **Interactive Map**: Our primary visualization will feature a map of the United States that displays flight routes as lines connecting origin and destination airports. The thickness of these lines will represent the volume of flights, while color coding will indicate average delay times. Users can filter by specific airlines, time periods, or delay thresholds, with the map updating dynamically to reflect these selections.  

When the users adjust filters or select specific regions, our tool will automatically update several supplementary visualizations:

> - **Plot 1: Average Delay by Time of Day and Day of Week**  
>   - A heatmap showing how delays vary throughout the day and across different days of the week  

> - **Plot 2: Delay Causes Distribution**  
>   - Breakdown of delay causes (weather, carrier, national aviation system, security, late aircraft) across different carriers and routes  

> - **Plot 3: Seasonal Patterns in Flight Cancellations**  
>   - Visualization of cancellation rates and reasons across different months and seasons  

### Exploratory Data Analysis

Our exploratory analysis in the notebook revealed several key insights:

> - The **distribution of delays** follows a **right-skewed pattern**, with most flights experiencing no delay or delays under 30 minutes, but with a **long tail** of extreme delays  
> - **Seasonal patterns** are evident, with **winter months (December and January)** showing higher delay rates  
> - **Performance differences** between major carriers, with some consistently **outperforming others in on-time arrival**  
> - **Certain airports and routes** exhibit significantly higher delay rates, indicating potential localized factors  
> - **Geographical trends** show that some regions experience **more consistent delays** than others  
> - **Day of the week effects** are pronounced, with **mid-week flights experiencing fewer delays than weekend flights**  

### Related work

Airline delay data has been analyzed in various studies, including:

> - **Predictive modeling for delay forecasting [3]**  
> - **Network analysis of the air transportation system [1]**  
> - **Impact of weather events[2] on flight operations**  

While existing studies provide valuable insights, our approach differs by:

> - **Providing a fully interactive visualization tool**  
> - **Including post-pandemic data (through August 2023)** to capture airline industry recovery  
> - **Focusing on user experience** with intuitive interfaces for non-technical users  
> - **Incorporating geographic and temporal context** into an integrated visualization system  

Our work is inspired by **FlightAware's Misery Map**, **New York Times' interactive transportation features**, and **Edward Tufte's data visualization principles** for presenting complex multivariate data.

**References**  
> - **[1]**  Ajayi, Joseph, Yao Xu, Lixin Li, and Kai Wang. 2024. "Enhancing Flight Delay Predictions Using Network Centrality Measures" Information 15, no. 9: 559. https://doi.org/10.3390/info15090559
> - **[2]**  Li, Qiang and Jing, Ranzhe and Dong, Zhijie Sasha, 2023. "Flight Delay Prediction With Priority Information of Weather and Non-Weather Features", Trans. Intell. Transport. Sys., no. 7: 7149, https://doi.org/10.1109/TITS.2023.3270743
> - **[3]**  Aravinda, Jatavallabha, Jacob, Gerlach and Aadithya, Naresh, 2024. "Deciphering Air Travel Disruptions: A Machine Learning Approach", arXiv, https://arxiv.org/abs/2408.02802


## Milestone 2
(18th April, 5pm)

**1. Sketches**
We developed a visualization centered around a U.S. map where each airport is represented by a color-coded dot indicating the average delay at the origin airport:
> - Red for higher average delays
> - Green for better on-time performance

This provides an immediate overview of airport-level reliability across the country.

**2. Tools and Lectures**
**Technologies Used:**

> - Leaflet.js: For the interactive U.S. map.

> - D3.js: For supplementary charts showing delay causes, time-of-day patterns, and seasonal effects.

> - Pandas, NumPy, GeoPandas, scikit-learn: For preprocessing, aggregation, and airport geolocation.

> - GeoJSON: For representing spatial data.

**Lecture Influences:**

> - Maps and Graphs: Informed projection choices and color encodings.

> - Data and Interactions: Guided interactive filtering design.

> - Uncertainty and Multivariate Data: Informed visual representations of multifactor delay causes.

**3. Work Breakdown**
**Features Implemented So Far:**

> - Interactive U.S. map showing delay severity per origin airport.

> - Responsive interface with zoom and airport-level interactivity.

> - Lightweight data backend using preprocessed CSVs.

> - Aggregated data abstractions (delays and cancellation causes per airport).

**Next Steps:**

> - Add destination airport overlays on the map.

> - Implement temporal filters: month, weekday, time of day.

**Build:**

> - Flights/hour visualization.

> - Demographics of flights visualization.

> - Style the website with basic HTML/CSS.

> - Stretch goals: Enable interactive brushing on charts to filter other views, Support multiple selections with distinguishable color palettes to compare time ranges.

**4. Prototype**
We have a working prototype hosted at: https://com-480-data-visualization.github.io/com-480-team-kraska/.

**Development Instructions:**

> - Run npm start to debug locally.

> - Use npm deploy to publish changes.

> - To update the .geojson used for map generation, check the end of processing/flight_data_exploration.ipynb.

> - Map logic is located in website/src/MapView.js.



## Milestone 3
(30th May, 5pm)

**Path to final result and technical setup/difficulties**

> - Raw data acquisition: [US DoT statistics](https://www.transtats.bts.gov/)

> - Raw flight data preprocessing and aggregation: Pandas, NumPy, GeoPandas, scikit-learn

> - Interactive U.S. map: Leaflet.js

> - Airport getlocation mapping: TopoJSON / GeoJSON

> - Delay filter to live update user selection: Leaflet.js

> - Website and data backend deployment: GitHub Pages, https://com-480-data-visualization.github.io/com-480-team-kraska/


## Late policy

- < 24h: 80% of the grade for the milestone
- < 48h: 70% of the grade for the milestone

