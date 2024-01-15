const Filter = ({ newSearchCountry, handleSearchCountryChange }) => {
    return (
      <div>
        <form>
          <div>
             filter shown with: <input value={newSearchCountry} onChange={handleSearchCountryChange} />
          </div>
        </form>
      </div>
    );
  };
  
  export default Filter;
  