import React from 'react';
import { Routes, Route }  from 'react-router-dom';
import  HomePage  from '../pages/HomePage.jsx';
import  MoviesPage  from '../pages/MoviesPage.jsx';


export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </div>
  );
};
// 50f0044b98fb36babd948adb82a325bf
// https://api.themoviedb.org/3/movie/550?api_key=50f0044b98fb36babd948adb82a325bf