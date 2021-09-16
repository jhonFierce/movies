import React, { Component, Fragment } from 'react'
import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';

import moviedata from './data/moviedata.json';
import './App.css'
export default class App extends Component {

  state = {
    movies : moviedata
  }



  render() {
    return (
      <Fragment>
        <SearchBar />
        <div id="movieCards">
        {
          this.state.movies.map((movie, index) => {
          if(index < 6) {
            return <MovieCard data={movie} key={`movie-${index}`} />
          }
          })
        }
        </div>
        learn react
      </Fragment>
    )
  }
}