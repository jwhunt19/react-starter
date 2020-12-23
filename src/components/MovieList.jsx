import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';

const MovieList = ({movies, toggleWatch, toggleInfo, watched}) => (
  <div className='movie-list'>
    {
      movies.map((movie) => {
        if (watched === true && movie.status === 'Watched') {
          return <MovieListEntry movie={movie} toggleWatch={toggleWatch} toggleInfo={toggleInfo} key={movie.title} />
        } else if (watched === false && movie.status === 'To Watch') {
          return <MovieListEntry movie={movie} toggleWatch={toggleWatch} toggleInfo={toggleInfo} key={movie.title} />
        }
      })
    }
  </div>
);

export default MovieList;
