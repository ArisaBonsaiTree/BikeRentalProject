import React from 'react';

function SearchBar({ searchTerm, handleInputChange }) {
  return (
    <input
      type="text"
      placeholder="Search"
      value={searchTerm}
      onChange={handleInputChange}
    />
  );
}

export default SearchBar;