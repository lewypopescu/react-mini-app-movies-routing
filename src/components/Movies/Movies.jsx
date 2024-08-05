import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { searchMovies } from '../../api';
import styles from './Movies.module.css';

import PropTypes from 'prop-types';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async e => {
    e.preventDefault();
    const data = await searchMovies(query);
    setMovies(data.results);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSearch} className={styles.form}>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search for a movie"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
      <ul className={styles.list}>
        {movies.map(movie => (
          <li key={movie.id} className={styles.item}>
            <Link to={`/movies/${movie.id}`} className={styles.link}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

Movies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    })
  ),
};

export default Movies;
