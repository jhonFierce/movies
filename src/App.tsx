import React, { Component, Fragment } from 'react'
import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';

import moviedata from './data/moviedata.json';
import './App.css';
import Movie from './interfaces/Movie';
export default class App extends Component {

  state : {
    movies : Movie[],
    w_size :string
  }

  handleResize = () => {
    if(window.innerWidth >= 576) this.setState({w_size: 'sm'});
    if (window.innerWidth >= 992) this.setState({w_size: 'lg'});
}

  constructor(props:{}) {
    super(props);
    // No llames this.setState() aquí!
    this.state = { 
      movies: moviedata,
      w_size: ''
    };
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

//992px

  render() {
    return (
      <Fragment>
        <SearchBar />
        <div id="movieCards" className={`movieCards-${this.state.w_size}`}>
        {
          this.state.movies.filter((movie, index) => index >= 0 && index < 6).map((movie, index) =>
          <MovieCard movie={movie} key={`movie-${index}`} />)
        }
        </div>
      </Fragment>
    )
  }
}