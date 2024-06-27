import { useState } from 'react';
import AddressForm from './AddressForm';
import Map from './Map';
import 'mapbox-gl/dist/mapbox-gl.css';

export default function Geo() {
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
    <div className="Geo">
      <AddressForm
        onSubmit={handleFormSubmit}
        address={address}
        setAddress={setAddress}
      />
      {address.longitude && address.latitude && (
        <Map
          longitude={address.longitude}
          latitude={address.latitude}
          updateCoordinates={updateCoordinates}
        />
      )}
    </div>
  );
}
