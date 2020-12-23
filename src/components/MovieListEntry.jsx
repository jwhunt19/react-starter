import React from 'react';

const MovieListEntry = ({movie, toggleWatch, toggleInfo}) => (
  <div className='movie-list-entry'>
    <span onClick={toggleInfo}>{movie.title}</span>
    <button onClick={toggleWatch}>{movie.status}</button>
  </div>
)

export default MovieListEntry;