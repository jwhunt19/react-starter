import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';

const MovieList = ({movies}) => (
  <div className='movie-list'>
    {
      movies.map((movie) => (
        <MovieListEntry movie={movie} key={movie.title} />
      ))
    }
  </div>
);

export default MovieList;
