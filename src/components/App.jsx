import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Movies from './Movies/Movies';
import MovieDetails from './MovieDetails/MovieDetails';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />;
      </Routes>
    </>
  );
}

export default App;
