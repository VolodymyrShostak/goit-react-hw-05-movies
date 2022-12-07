import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GeterReviewsFilm } from '../api';
import { Loader } from '../Loader/Loader';

function MovieDetailsReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getFilm(movieId) {
      try {
        setIsLoading(true);
        const { data } = await GeterReviewsFilm(movieId);

        setReviews(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getFilm(movieId);
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}

      {!reviews.length > 0 && !isLoading && <h3>No reviews</h3>}
      {reviews.length > 0 && (
        <ul>
          {reviews.map(review => (
            <li key={review.id} review={review}>
              <p>{review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default MovieDetailsReviews;
