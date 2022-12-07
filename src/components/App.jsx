import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
// import HomePage from '../pages/HomePage';
// import MoviesPage from '../pages/MoviesPage';
// import MovieDetails from '../pages/MovieDetails/MovieDetails';
// import NotFound from '../pages/404Page/404';
// import MovieDetailsCast from './MovieDetailsCast/MovieDetailsCast';
// import MovieDetailsReviews from './MovieDetailsReviews/MovieDetailsReviews';
// ;

const HomePage = lazy(() => import('../pages/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const NotFound = lazy(() => import('../pages/404Page/404'));
const MovieDetailsCast = lazy(() => import('./MovieDetailsCast/MovieDetailsCast'));
const MovieDetailsReviews = lazy(() =>
  import('./MovieDetailsReviews/MovieDetailsReviews')
);


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<MovieDetailsCast />} />
            <Route path="reviews" element={<MovieDetailsReviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
