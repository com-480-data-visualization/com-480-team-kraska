import L from 'leaflet';
import { MapContainer, TileLayer, GeoJSON, Tooltip } from 'react-leaflet';
import { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';

const MapView = () => {
  const [geoData, setGeoData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [maxDelayFilter, setMaxDelayFilter] = useState(null);
  const [delayRange, setDelayRange] = useState({ min: 0, max: 100 });

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data/fl_sw_agg.geojson`)
      .then(res => res.json())
      .then(data => {
        setGeoData(data);

        const max_delay = data.features[0]?.properties.MAX_AVG_DELAY || 0;
        const min_delay = data.features[0]?.properties.MIN_AVG_DELAY || 0;

        setDelayRange({ min: min_delay, max: max_delay });
        setMaxDelayFilter(max_delay);
      });
  }, []);

  useEffect(() => {
    if (!geoData || maxDelayFilter === null) return;

    const filtered = {
      ...geoData,
      features: geoData.features.filter(feature => {
        const delay = feature.properties.AVG_DELAY || 0;
        return delay < maxDelayFilter;
      })
    };

    setFilteredData(filtered);
  }, [geoData, maxDelayFilter]);

  const styleFeature = (feature) => {
    const delay = feature.properties.AVG_DELAY || 0;
    const max_delay = feature.properties.MAX_AVG_DELAY || 0;
    const min_delay = feature.properties.MIN_AVG_DELAY || 0;
    const dist = max_delay - min_delay;

    return {
      radius: delay / dist * 15,
      fillColor: 'rgb(255,' + String(Math.round((max_delay - delay) / dist * 255)) + ',0)',
      color: 'black',
      weight: 0.5,
      opacity: 1,
      fillOpacity: 0.8
    };
  };

  const onEachFeature = (feature, layer) => {
    const { ORIGIN, AVG_DELAY } = feature.properties;
    layer.bindTooltip(
      `${ORIGIN}<br/>Average Delay: ${+(AVG_DELAY || 0).toFixed(2)} mins`,
      { permanent: false }
    );
  };

  const handleSliderChange = (e) => {
    setMaxDelayFilter(parseFloat(e.target.value));
  };

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      {/* Filter Control */}
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        zIndex: 1000,
        background: 'white',
        padding: '15px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
        minWidth: '250px'
      }}>
        <div style={{ marginBottom: '10px', fontWeight: 'bold' }}>
          Filter by Maximum Delay
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="range"
            min={delayRange.min}
            max={delayRange.max}
            step="0.1"
            value={maxDelayFilter || delayRange.max}
            onChange={handleSliderChange}
            style={{ width: '100%' }}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#666' }}>
          <span>{delayRange.min.toFixed(1)} min</span>
          <span>{delayRange.max.toFixed(1)} min</span>
        </div>
        <div style={{ textAlign: 'center', marginTop: '8px', fontWeight: 'bold' }}>
          Showing delays &lt; {maxDelayFilter?.toFixed(1)} minutes
        </div>
        <div style={{ textAlign: 'center', fontSize: '12px', color: '#666' }}>
          {filteredData ? filteredData.features.length : 0} airports visible
        </div>
      </div>

      <MapContainer center={[39.8283, -98.5795]} zoom={4} style={{ height: '100vh' }}>
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {filteredData && (
          <GeoJSON
            key={maxDelayFilter} // Force re-render when filter changes
            data={filteredData}
            pointToLayer={(feature, latlng) => L.circleMarker(latlng, styleFeature(feature))}
            onEachFeature={onEachFeature}
          />
        )}
      </MapContainer>
    </div>
  );
};

export default MapView;

