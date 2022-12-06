import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MoviesPage from '../pages/MoviesPage';
import MovieDetails from '../pages/MovieDetails/MovieDetails';
import MovieDetailsCast from './MovieDetailsCast/MovieDetailsCast';
import MovieDetailsReviews from './MovieDetailsReviews/MovieDetailsReviews';

import { Layout } from './Layout/Layout';


// import { FilmItem } from '../pages/MovieDetails/MovieDetails';

// import MovieDetailsCast from '../components/MovieDetailsCast';
// import MovieDetailsReviews from '../components/MovieDetailsReviews';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<MovieDetailsCast />} />
            <Route
              path="reviews"
              element={<MovieDetailsReviews />}
             />
          </Route>
        </Route>
        {/* </Route> */}
      </Routes>
    </>
  );
};
