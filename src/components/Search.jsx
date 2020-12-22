import React from 'react';

const Search = ({handleSearch}) => (
  <div className="search-bar">
    <input type="text" id="movie-search" placeholder="Search..."></input>
    <button onClick={handleSearch}>
      <span>Go!</span>
    </button>
  </div>
);

export default Search;