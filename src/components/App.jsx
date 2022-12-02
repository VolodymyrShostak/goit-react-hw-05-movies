import React from 'react';
import { Routes, Route }  from 'react-router-dom';
import  HomePage  from '../pages/HomePage.jsx';
import MoviesPage from '../pages/MoviesPage.jsx';
import { Layout } from './Layout/Layout.jsx';


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout /> }></Route>
        <Route path="/home" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </>
  );
};
// 50f0044b98fb36babd948adb82a325bf
// https://api.themoviedb.org/3/movie/550?api_key=50f0044b98fb36babd948adb82a325bf