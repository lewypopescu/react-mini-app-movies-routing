import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from '../../api';
import styles from './Home.module.css';

import PropTypes from 'prop-types';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const data = await getTrendingMovies();
      setMovies(data.results);
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Trending today</h2>
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

Home.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    })
  ),
};

export default Home;
