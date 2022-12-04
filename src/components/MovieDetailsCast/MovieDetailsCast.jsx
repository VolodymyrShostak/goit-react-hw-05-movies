import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apiURL, GeterFilmActorsTeam } from '../../components/api';
// import {
//   Wrapper,
 
// } from './styled'

// import PropTypes from 'prop-types';
function MovieDetailsCast() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState('');

    useEffect(() => {
        async function getFilm(movieId) {
            try {
                const { data } = await GeterFilmActorsTeam(movieId);

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
                    <img
                        src={
                            profile_path
                                ? apiURL + profile_path
                                : 'https://i.postimg.cc/MTBLYYMP/poster-not-available.jpg'
                        } alt="actor" />,
                <p>{original_name}</p>,
                <p>{character}</p>
            
             ) })
        }
      </>
    );
}
export default MovieDetailsCast;