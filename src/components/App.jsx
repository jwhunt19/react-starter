import React from 'react';
import movies from '../data/movies.js';
import MovieList from './MovieList.jsx';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      movies: movies
    };
  }

  render() {
    return (
    <div className="movie-list-wrapper">
      <h1>Movie List</h1>
      <MovieList movies={this.state.movies} />
    </div>
    )
  };
}

export default App;
