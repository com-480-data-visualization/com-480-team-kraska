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


## Milestone 2 (18th April, 5pm)

**10% of the final grade**


## Milestone 3 (30th May, 5pm)

**80% of the final grade**


## Late policy

- < 24h: 80% of the grade for the milestone
- < 48h: 70% of the grade for the milestone

