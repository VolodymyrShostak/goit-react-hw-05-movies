import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {  GeterReviewsFilm } from '../api';

// import PropTypes from 'prop-types';

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
// {
//   !reviews.length > 0 ? (
//     <TitleReviews>No reviews</TitleReviews>
//   ) : (
//     <ListReviews>
//       <TitleReviews>Users reviews</TitleReviews>
//       {reviews.map(review => (
//         <ReviewsItem key={review.id} review={review} />
//       ))}
//     </ListReviews>
//   );
// }