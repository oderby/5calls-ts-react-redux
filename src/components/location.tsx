import * as React from 'react';

interface Props {
  readonly location: string;
  readonly isValid: boolean;
  readonly isLoading: boolean;
  readonly setLocation: (location: string) => void;
  readonly clearLocation: () => void;
}

const Location: React.StatelessComponent<Props> = ({location, isValid, isLoading, setLocation, clearLocation}) => {
  let pretext;
  if (location) {
    pretext = <p id="locationMessage">Your location: <span>{location}</span></p>;
  } else if (isLoading) {
    pretext = <p id="locationMessage" className="loadingAnimation">Getting your location</p>;
  } else if (!isValid) {
    pretext = <p id="locationMessage" role="alert">That address is invalid, please try again</p>;
  } else {
    pretext = <p id="locationMessage">Enter your location</p>;
  }

  let input;
  if (!isLoading && isValid && location) {
    const enterLocation = (e) => {
      e.preventDefault();
      clearLocation();
    };
    input = <div><button onClick={enterLocation}>Change location</button></div>;
  } else {
    const submitAddress = (e) => {
      e.preventDefault();
      const newLocation = e.target.elements.address.value;
      setLocation(newLocation);
    };
    input = (
      <div><form onSubmit={submitAddress}>
        <input type="text" autoFocus={true} id="address" name="address"
          aria-labelledby="locationMessage" aria-invalid={!isValid}
          disabled={isLoading}
          placeholder="Enter an address or zip code" />
        <button>Go</button>
      </form></div>
    );
  }

  return (
    <div>
      {pretext}
      {input}
    </div>
  );

};

export default Location;
