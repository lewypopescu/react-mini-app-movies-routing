import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../api';
import styles from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const data = await getMovieReviews(movieId);
        setReviews(data.results);
      } catch (error) {
        console.error('Failed to fetch movie reviews:', error);
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  if (reviews.length === 0) {
    return (
      <p className={styles.message}>
        We don't have any reviews for this movie.
      </p>
    );
  }

  return (
    <div className={styles.container}>
      <button onClick={() => window.history.back()} className={styles.button}>
        Go back
      </button>
      <h3>Reviews</h3>
      <ul className={styles.list}>
        {reviews.map(review => (
          <li key={review.id} className={styles.item}>
            <h4>{review.author}</h4>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
