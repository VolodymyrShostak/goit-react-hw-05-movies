import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MoviesPage from '../pages/MoviesPage';
import { Layout } from './Layout/Layout';
// import MovieDetails from '../pages/MovieDetails';
// import MovieDetailsCast from '../components/MovieDetailsCast';
// import MovieDetailsReviews from '../components/MovieDetailsReviews';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />}>
            {/* <Route path="/movies/:movieId" element={<MovieDetails />}> */}
              {/* <Route path="/movies/:movieId/cast" element={<MovieDetailsCast />} /> */}
              <Route
                path="/movies/:movieId/reviews"
              // element={<MovieDetailsReviews />}
            />
            </Route>
          </Route>
        {/* </Route> */}
      </Routes>
    </>
  );
};
