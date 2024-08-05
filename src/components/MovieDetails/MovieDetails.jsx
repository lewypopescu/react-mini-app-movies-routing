import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getMovieDetails } from '../../api';
import styles from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.error('Failed to fetch movie details:', error);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <button onClick={() => window.history.back()} className={styles.button}>
        Go back
      </button>
      <h3 className={styles.additionalInfoTitle}>Additional information</h3>
      <ul className={styles.additionalInfoList}>
        <li>
          <Link to={`/movies/${movieId}/cast`} className={styles.link}>
            Cast
          </Link>
        </li>
        <li>
          <Link to={`/movies/${movieId}/reviews`} className={styles.link}>
            Reviews
          </Link>
        </li>
      </ul>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className={styles.poster}
      />
      <h2 className={styles.title}>
        {movie.title} ({movie.release_date.split('-')[0]})
      </h2>
      <p className={styles.score}>
        User Score: {(movie.vote_average * 10).toFixed(1)}%
      </p>
      <h3 className={styles.overviewTitle}>Overview</h3>
      <p className={styles.overview}>{movie.overview}</p>
      <h3 className={styles.genresTitle}>Genres</h3>
      <p className={styles.genres}>
        {movie.genres.map(genre => genre.name).join(', ')}
      </p>
    </div>
  );
};

export default MovieDetails;
