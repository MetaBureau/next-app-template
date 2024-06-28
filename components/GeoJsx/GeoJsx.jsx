// https://aleksandarpopovic.com/Address-Search-With-React-and-Mapbox-API/

// import "./App.scss";
import 'mapbox-gl/dist/mapbox-gl.css';
import { SimpleGrid } from '@mantine/core';
import { useState } from 'react';
import Map from './Map';
import AddressForm from './AddressForm';

// ({ image, title, category }: CardProps)
function GeoJsx({ thing }) {
  const [address, setAddress] = useState({
    streetAndNumber: '',
    place: '',
    region: '',
    postcode: '',
    country: '',
    latitude: '',
    longitude: '',
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (address.streetAndNumber) {
      console.log('Selected address:', address);
    }
  };

  const updateCoordinates = (latitude, longitude) => {
    setAddress({ ...address, latitude, longitude });
  };

  return (
    <>
    <h2>{thing}</h2>
    <SimpleGrid cols={2}>
      <div>
        <AddressForm
          onSubmit={handleFormSubmit}
          address={address}
          setAddress={setAddress}
      />
      </div>
      <div>
        {address.longitude && address.latitude && (
        <Map
          longitude={address.longitude}
          latitude={address.latitude}
          updateCoordinates={updateCoordinates}
        />
      )}
      </div>

    </SimpleGrid>
    </>
  );
}

export default GeoJsx;
