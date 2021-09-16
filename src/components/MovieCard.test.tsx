import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react/';
import MovieCard from './MovieCard';
import moviedata from '../data/moviedata.json';

test('renders content', () => {
    const movies = moviedata;
    movies.forEach(movie => {
        const component = render(<MovieCard data={movie} />);
        
    });
});