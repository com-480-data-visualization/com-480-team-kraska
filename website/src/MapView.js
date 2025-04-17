import L from 'leaflet';
import { MapContainer, TileLayer, GeoJSON, Tooltip } from 'react-leaflet';
import { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';

const MapView = () => {
  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data/fl_sw_agg.geojson`)
      .then(res => res.json())
      .then(setGeoData);
  }, []);

  const styleFeature = (feature) => {
    const delay = feature.properties.AVG_DELAY || 0;
    const max_delay = feature.properties.MAX_AVG_DELAY || 0;
    const min_delay = feature.properties.MIN_AVG_DELAY || 0;
    const dist = max_delay - min_delay;
    return {
      radius: delay / dist * 15,
      // fillColor: delay > 10 ? 'red' : delay > 5 ? 'orange' : 'yellow',
      fillColor: 'rgb(255,' + String((max_delay - delay) / dist * 255) + ',0)',
      color: 'black',
      weight: 0.5,
      opacity: 1,
      fillOpacity: 0.8
    };
  };

  const onEachFeature = (feature, layer) => {
    const { ORIGIN, AVG_DELAY } = feature.properties;
    layer.bindTooltip(
      `${ORIGIN}<br/>Average Delay: ${+AVG_DELAY.toFixed(2)} mins`,
      { permanent: false }
    );
  };

  return (
    <MapContainer center={[39.8283, -98.5795]} zoom={4} style={{ height: '100vh' }}>
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {geoData && (
        <GeoJSON
          data={geoData}
          pointToLayer={(feature, latlng) => L.circleMarker(latlng, styleFeature(feature))}
          onEachFeature={onEachFeature}
        />
      )}
    </MapContainer>
  );
};

export default MapView;

