import React, { useState, useEffect } from 'react';
import ReactMapGl, { Marker, ViewStateChangeEvent, MapEvent } from 'react-map-gl';
import PointerIcon from '../../assets/pointer.svg';

const TOKEN = 'pk.eyJ1IjoibWV0YWJ1cmVhdSIsImEiOiJjbHY3ZzdjbWwwOWVtMmtueDFrdTJkc2RyIn0.cxMBN9cYT8gWMD8H37adTA';

interface MapProps {
  longitude: number;
  latitude: number;
  updateCoordinates: (latitude: number, longitude: number) => void;
}

const Map: React.FC<MapProps> = ({ longitude, latitude, updateCoordinates }) => {
  const [viewport, setViewport] = useState({
    latitude,
    longitude,
    zoom: 16,
  });

  const [marker, setMarker] = useState({
    latitude,
    longitude,
  });

  useEffect(() => {
    setViewport((oldViewport) => ({
      ...oldViewport,
      latitude,
      longitude,
    }));
  }, [latitude, longitude]);

  const handleMarkerDrag = (event: MapEvent) => {
    const latitude = event.lngLat[1];
    const longitude = event.lngLat[0];

    setMarker({ latitude, longitude });

    updateCoordinates(latitude, longitude);
  };

  return (
    <div className="map">
      <ReactMapGl
        {...viewport}
        mapboxAccessToken={TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        onMove={(event: ViewStateChangeEvent) => {
          setViewport(event.viewState);
        }}
      >
        <Marker
          latitude={marker.latitude}
          longitude={marker.longitude}
          draggable
          onDragEnd={handleMarkerDrag}
        >
          <img className="marker" src={PointerIcon} alt="Pointer Icon" />
        </Marker>
      </ReactMapGl>
    </div>
  );
};

export default Map;
