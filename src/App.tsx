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
    /* due the movies are not indexed, it will be done manually */ 
    this.state = { 
      movies: moviedata.map((movie, index) => { 
        let tempMovie = new Movie();
        tempMovie.id = index;
        Object.assign(tempMovie, movie);
        return tempMovie; 
      } ),
      w_size: ''
    };
    console.log(this.state.movies);
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
          this.state.movies.filter(movie => movie.id >= 0 && movie.id < 6).map(movie =>
          <MovieCard movie={movie} key={`movie-${movie.id}`} />)
        }
        </div>
      </Fragment>
    )
  }
}