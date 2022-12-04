import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apiURL, GeterReviewsFilm } from '../api';


// import PropTypes from 'prop-types';

function MovieDetailsReviews() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState('');

    useEffect(() => {
        async function getFilm(movieId) {
            try {
                const { data } = await GeterReviewsFilm(movieId);

                setMovie(data);
            } catch (error) {
                console.log(error);
            }
        }
        getFilm(movieId);
    }, [movieId]);
    useEffect(() => {
        console.log(movie);
    }, [movie]);

    const { profile_path, original_name, character,cast } = movie;

    return (
      <>
            {cast.map(actor => {
                return (
                  (
                    <img
                      src={
                        profile_path
                          ? apiURL + profile_path
                          : 'Poster not available'
                      }
                      alt="actor"
                    />
                  ),
                  (<p>{original_name}</p>),
                  (<p>{character}</p>)
                ); })
        }
      </>
    );
}

export default MovieDetailsReviews;
