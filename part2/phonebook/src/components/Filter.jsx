const Filter = ({ newSearchName, handleSearchNameChange }) => {
  return (
    <div>
      <form>
        <div>
           filter shown with: <input value={newSearchName} onChange={handleSearchNameChange} />
        </div>
      </form>
    </div>
  );
};

export default Filter;
