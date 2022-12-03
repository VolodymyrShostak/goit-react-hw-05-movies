import React from 'react';
import { Routes, Route }  from 'react-router-dom';
import  HomePage  from '../pages/HomePage.jsx';
import MoviesPage from '../pages/MoviesPage.jsx';
import { Layout } from './Layout/Layout.jsx';


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
        </Route>
      </Routes>
    </>
  );
};
