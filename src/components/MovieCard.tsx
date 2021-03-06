import React, { Component } from 'react';
import './MovieCardStyles.css';
import moment from 'moment';
import Movie from '../interfaces/Movie';

type Props = {
    movie : Movie
}
export default class MovieCard extends Component<Props> {
    movie = this.props.movie;
    changeFavorite = () => {
        console.log(this.movie.id);
    }

    render() {
        return (
            <div className="movieCard">
                <button className={`btn-favorite-${this.movie.favorite}`} onClick={this.changeFavorite}>Favorite</button>
                <div className="imageWrapper">
                {
                    /* Check if have the image link and also need https to be able to load the image */
                        this.movie.info.image_url &&
                        <img
                            src={this.movie.info.image_url.replace('http', 'https')}
                            alt={`${this.movie.title}`}
                        />
                }
                </div>
                <div className="info-wrapper">
                <p>Title: {this.movie.title}</p>
                <p>Year: {this.movie.year}</p>
                {
                    this.movie.info.actors &&
                    <p>Actors: {this.movie.info.actors.reduce((str, actor) => str += `${actor}, `, '').slice(0, -2)}</p>
                }
                {
                    this.movie.info.genres &&
                    <p>Genres: {this.movie.info.genres.reduce((str, genre) => str += `${genre}, `, '').slice(0, -2)}</p>
                }
                    <p>Plot: {(this.movie.info.plot && this.movie.info.plot) || 'not available'}</p>
                    <p>Rank: {(this.movie.info.rank && this.movie.info.rank) || 'not available'}</p>
                    <p>Rating: {(this.movie.info.rating && this.movie.info.rating) || 'not available'}</p>
                    <p>Release Date: {(this.movie.info.release_date && moment(this.movie.info.release_date).format('YYYY-MM-DD')) || 'not available'}</p>
                    <p>Duration: {(this.movie.info.running_time_secs && `${this.movie.info.running_time_secs / 60} mins`) || 'not available'} </p>
                </div>
            </div>
        )
    }
}
