// src/MapView.jsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function MapView() {
  // Set the initial center of the map [latitude, longitude]
  const position = [51.505, -0.09]; // Coordinates for London, UK
  
  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer
        // OpenStreetMap tile layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        // Attribution data
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup.
          <br />
          Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapView;
