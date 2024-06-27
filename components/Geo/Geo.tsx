import { useState } from 'react';
import AddressForm from './AddressForm';
import Map from './Map';
import 'mapbox-gl/dist/mapbox-gl.css';

interface Geo {
  streetAndNumber: string;
  place: string;
  region: string;
  postcode: string;
  country: string;
  latitude: string;
  longitude: string;
}

const Geo: React.FC = () => {
  const [address, setAddress] = useState({
    streetAndNumber: '',
    place: '',
    region: '',
    postcode: '',
    country: '',
    latitude: '',
    longitude: '',
  });

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (address.streetAndNumber) {
      console.log('Selected address:', address);
    }
  };

  const updateCoordinates = (latitude: string, longitude: string) => {
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
};

export default Geo;
