import PropTypes from 'prop-types';
import AutoCompleteInput from './AutoCompleteInput';

import classes from './AddresForm.module.css';

interface AddressFormProps {
  address: {
    streetAndNumber: string;
    place: string;
    region: string;
    postcode: string;
    country: string;
    latitude?: string;
    longitude?: string;
  };
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  setAddress: (newAddress: typeof address) => void;
}

export default function AddressForm({ address, onSubmit, setAddress }: AddressFormProps) {
  const handleManualInputChange = (event: React.ChangeEvent<HTMLInputElement>, stateProperty: keyof typeof address) => {
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
      <input
        type="text"
        id="city"
        placeholder="City"
        value={address.place}
        onChange={(event) => handleManualInputChange(event, 'place')}
      />

      <label htmlFor="state">State/Province/Region</label>
      <input
        type="text"
        id="state"
        placeholder="State/Province/Region"
        value={address.region}
        onChange={(event) => handleManualInputChange(event, 'region')}
      />

      <label htmlFor="postcode">Postcode</label>
      <input
        type="text"
        id="postcode"
        placeholder="Postcode"
        value={address.postcode}
        onChange={(event) => handleManualInputChange(event, 'postcode')}
      />

      <label htmlFor="country">Country</label>
      <input
        type="text"
        id="country"
        placeholder="Country"
        value={address.country}
        onChange={(event) => handleManualInputChange(event, 'country')}
      />

      <div className="buttons">
        <button type="submit" className="confirm-button">
          Confirm
        </button>
        <button
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
        </button>
      </div>
    </form>
  );
}

