import { useState, useEffect } from "react";
import countryService from "./services/countries";
import Countries from "./components/Countries";
import Filter from "./components/Filter";


const App = () => {


  const [countries, setCountries] = useState([]);
  const [newSearchCountry, setSearchCountry] = useState("");


  useEffect(() => {
      countryService
      .getAll()
      .then(initialCountries => {
        setCountries(initialCountries)
      })
  }, [])

  const countriesToShow =
    newSearchCountry === ""
      ? countries
      : countries.filter((country) =>
          country.name.common.toLowerCase().includes(newSearchCountry.toLowerCase())
        );
  


  const handleSearchCountryChange = (event) => {
    setSearchCountry(event.target.value);
  };

  return (
    <div>
      <h2>Country Info App</h2>
      <Filter
        newSearchCountry={newSearchCountry}
        handleSearchCountryChange={handleSearchCountryChange}
      />

      <h2></h2>
      <Countries countriesToShow={countriesToShow}  />
    </div>
  );
};

export default App;
