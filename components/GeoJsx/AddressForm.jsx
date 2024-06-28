import "./AddressForm.module.css";
import AutoCompleteInput from "./AutoCompleteInput";
import PropTypes from "prop-types";
import { Input } from '@mantine/core';
import { Button } from '@mantine/core';

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
      <label htmlFor="address">Address</label>
      <AutoCompleteInput
        setAddress={setAddress}
        handleManualInputChange={handleManualInputChange}
        streetAndNumber={address.streetAndNumber}
      />

      <label htmlFor="city">City</label>

      <Input
        type="text"
        id="city"
        placeholder="City"
        value={address.place}
        onChange={(event) => handleManualInputChange(event, "place")}
      />

      <label htmlFor="state">State/Province/Region</label>
      <Input
        type="text"
        id="state"
        placeholder="State/Province/Region"
        value={address.region}
        onChange={(event) => handleManualInputChange(event, "region")}
      />

      <label htmlFor="postcode">Postcode</label>
      <Input
        type="text"
        id="postcode"
        placeholder="Postcode"
        value={address.postcode}
        onChange={(event) => handleManualInputChange(event, "postcode")}
      />

      <label htmlFor="country">Country</label>
      <Input
        type="text"
        id="country"
        placeholder="Country"
        value={address.country}
        onChange={(event) => handleManualInputChange(event, "country")}
      />

      <label htmlFor="latitude">Latitude</label>
      <Input
        type="text"
        id="latitude"
        placeholder="latitude"
        value={address.latitude}
        onChange={(event) => handleManualInputChange(event, "latitude")}
      />

      <label htmlFor="longitude">Longitude</label>
      <Input
        type="text"
        id="longitude"
        placeholder="longitude"
        value={address.longitude}
        onChange={(event) => handleManualInputChange(event, "longitude")}
      />

      <div className="buttons">
        <Button type="submit" className="confirm-button">
          Confirm
        </Button>
        <Button
          type="reset"
          className="reset-button"
          onClick={() =>
            setAddress({
              streetAndNumber: "",
              place: "",
              region: "",
              postcode: "",
              country: "",
              latitude: "",
              longitude: "",
            })
          }
        >
          Reset
        </Button>
      </div>
    </form>
  );
}