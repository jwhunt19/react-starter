import React from 'react';
import movies from '../data/movies.js';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      movies: movies
    };
  }

  handleSearch() {
    let input = document.getElementById('movie-search').value;
    if (input.length === 0) {
      this.setState({movies: movies});
    } else {
      let searched = [];
      this.state.movies.forEach((movie) => {
        if (movie.title.includes(input)) {
          searched.push(movie);
        }
      });
      if (searched.length === 0) {
        alert('No Results Found');
      } else {
        this.setState({movies: searched});
      }
    }
  }

  handleAdd() {
    console.log('test');
  }

  render() {
    return (
    <div className="movie-list-wrapper">
      <h1>Movie List</h1>
      <AddMovie handleAdd={this.handleAdd.bind(this)}/>
      <Search handleSearch={this.handleSearch.bind(this)}/>
      <MovieList movies={this.state.movies} />
    </div>
    )
  };
}

export default App;
