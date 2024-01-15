import React, { useState } from "react";
import Country from "./Country";

const Countries = ({ countriesToShow }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleShowDetails = (country) => {
    setSelectedCountry(country);
  };

  return (
    <>
      <ul>
        {countriesToShow.length > 10 ? (
          <div>Too many matches, specify another filter</div>
        ) : countriesToShow.length === 1 ? (
          countriesToShow.map((country) => (
            <Country key={country.name.common} country={country} />
          ))
        ) : (
          countriesToShow.map((country) => (
            <li key={country.name.common}>
              {country.name.common}
              <button onClick={() => handleShowDetails(country)}> Show </button>
            </li>
          ))
        )}
      </ul>

      {selectedCountry && (
        <div>
          <h2>Selected Country Details</h2>
          <Country country={selectedCountry} />
        </div>
      )}
    </>
  );
};

export default Countries;
