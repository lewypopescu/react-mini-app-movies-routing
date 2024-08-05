import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Movies from './Movies/Movies';
import MovieDetails from './MovieDetails/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />;
        <Route path="/movies/:movieId/cast" element={<Cast />} />;
        <Route path="/movies/:movieId/reviews" element={<Reviews />} />;
      </Routes>
    </>
  );
}

export default App;
