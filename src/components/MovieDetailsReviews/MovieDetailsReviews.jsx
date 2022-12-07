import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {  GeterReviewsFilm } from '../api';


function MovieDetailsReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getFilm(movieId) {
      try {
        const { data } = await GeterReviewsFilm(movieId);

        setReviews(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    getFilm(movieId);
  }, [movieId]);

    return (
      <>
       {
  !reviews.length > 0 ? (
    <h1>No reviews</h1>
  ) : (
    <ul>
     
      {reviews.map(review => (
        <li key={review.id} review={review} >
          <p>{review.author}</p>
          <p>{review.content}</p>
          </li>
      ))}
    </ul>
  )
}
      </>
    );
}

export default MovieDetailsReviews;
