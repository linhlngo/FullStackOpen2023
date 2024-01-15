const Country = ({ country }) => {
    return (
      <div>
        <h2> {country.name.common}</h2>
        <p>Capital {country.capital}</p>
        <p>Area {country.area}</p>
        <h3>Languages</h3>
        <ul>
          {Object.entries(country.languages).map(([code, name], index) => (
            <li key={index}>
              {name}
            </li>
          ))}
        </ul>
        <img src={country.flags.png} alt={`${country.name.common} Flag`} />
      </div>
    );
  };
  
  export default Country;
  