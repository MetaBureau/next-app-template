import './AddressForm.module.css';
import PropTypes from 'prop-types';
import { Input, Button } from '@mantine/core';
import AutoCompleteInput from './AutoCompleteInput';

AddressForm.propTypes = {
  address: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  setAddress: PropTypes.func.isRequired,
};

export default function AddressForm({ address, onSubmit, setAddress }) {
  const handleManualInputChange = (event, stateProperty) => {
    const newAddress = { ...address };
    newAddress[stateProperty] = event.target.value;

    setAddress(newAddress);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      {/* <label htmlFor="address">Address</label> */}
      <AutoCompleteInput
        setAddress={setAddress}
        handleManualInputChange={handleManualInputChange}
        streetAndNumber={address.streetAndNumber}
      />

      <Input.Wrapper label="City" description="City" error="" size="md">
        <Input
          type="text"
          id="city"
          placeholder="City"
          value={address.place}
          onChange={(event) => handleManualInputChange(event, 'place')}
        />
      </Input.Wrapper>

      <Input.Wrapper label="State/Province/Region" description="State" error="" size="md">
      <Input
        type="text"
        id="state"
        placeholder="State/Province/Region"
        value={address.region}
        onChange={(event) => handleManualInputChange(event, 'region')}
      />
      </Input.Wrapper>

      <Input.Wrapper label="Postcode" description="Postcode" error="" size="md">
      <Input
        type="text"
        id="postcode"
        placeholder="Postcode"
        value={address.postcode}
        onChange={(event) => handleManualInputChange(event, 'postcode')}
      />
      </Input.Wrapper>

      <Input.Wrapper label="Country" description="Country" error="" size="md">
      <Input
        type="text"
        id="country"
        placeholder="Country"
        value={address.country}
        onChange={(event) => handleManualInputChange(event, 'country')}
      />
      </Input.Wrapper>

      <Input.Wrapper label="Latitude" description="Latitude" error="" size="md">
      <Input
        type="text"
        id="latitude"
        placeholder="latitude"
        value={address.latitude}
        onChange={(event) => handleManualInputChange(event, 'latitude')}
      />
      </Input.Wrapper>

      <Input.Wrapper label="Longitude" description="Longitude" error="" size="md">
      <Input
        type="text"
        id="longitude"
        placeholder="longitude"
        value={address.longitude}
        onChange={(event) => handleManualInputChange(event, 'longitude')}
      />
      </Input.Wrapper>

      <div className="buttons">
        <Button type="submit" className="confirm-button">
          Confirm
        </Button>
        <Button
          type="reset"
          className="reset-button"
          onClick={() =>
            setAddress({
              streetAndNumber: '',
              place: '',
              region: '',
              postcode: '',
              country: '',
              latitude: '',
              longitude: '',
            })
          }
        >
          Reset
        </Button>
      </div>
    </form>
  );
}
