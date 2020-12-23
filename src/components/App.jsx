// Modules
import React from 'react';
import _ from 'lodash';

// Components
import movies from '../data/movies.js';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';
import MovieListEntry from './MovieListEntry.jsx';
import WatchedTabs from './WatchedTabs.jsx';


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      movies: movies,
      search: [],
      watched: true
    };
  }

  handleSearch() {
    let input = document.getElementById('movie-search').value;

    if (input.length === 0) {
      this.setState({search: []});
    } else {
      let results = this.state.movies.filter(movie => {
        return movie.title.toLowerCase().includes(input.toLowerCase())
      });

      this.setState({search: results})

      if (results.length === 0) {
        alert('No Results Found');
      } 
    }
  }

  handleAdd() {
    if (_.reduce(this.state.movies, (bool, movie) => {
      return bool === (
        movie.title.toLowerCase() !== document.getElementById('movie-add').value.toLowerCase()
      )
    }, false)) {
      alert('Already on Movie List')
    } else {
      let newMovie = {title: document.getElementById('movie-add').value, status: 'To Watch'};
      this.setState({movies: this.state.movies.concat(newMovie)});
    }
  }

  handleWatch(e) {
    if (e.target.classList.contains('watched')) {
      this.setState({watched: true})
    } else if (e.target.classList.contains('to-watch')) {
      this.setState({watched: false})
    }
  }

  toggleWatch(e) {
    let toggledMovies = [];

    this.state.movies.forEach(movie => {
      if (movie.title === e.target.previousSibling.textContent) {
        if (e.target.textContent === 'Watched') {
          toggledMovies.push({title: movie.title, status:'To Watch'});
        } else if (e.target.textContent === 'To Watch') {
          toggledMovies.push({title: movie.title, status:'Watched'});
        }
      } else {
        toggledMovies.push(movie)
      }
    });

    this.setState({movies: toggledMovies});
  }

  toggleInfo(e) {
    console.log(e.target);
    e.target.parentNode.insertAdjacentElement("afterEnd", )
  }


  render() {
    return (
    <div className="movie-list-wrapper">
      <h1>Movie List</h1>
      <AddMovie handleAdd={this.handleAdd.bind(this)}/>
      <div className="tabs-search">
        <WatchedTabs handleWatch={this.handleWatch.bind(this)} watched={this.state.watched} />
        <Search handleSearch={this.handleSearch.bind(this)}/>
      </div>
      {
        this.state.search.length ?
        <MovieList 
          movies={this.state.search} 
          toggleWatch={this.toggleWatch.bind(this)} 
          watched={this.state.watched}
          toggleInfo={this.toggleInfo.bind(this)} /> :
        <MovieList 
        movies={this.state.movies} 
        toggleWatch={this.toggleWatch.bind(this)} 
        watched={this.state.watched}
        toggleInfo={this.toggleInfo.bind(this)} />
      }
    </div>
    )
  };
}

export default App;
