import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apiURL, GeterFilmActorsTeam } from '../../components/api';
import {
  Image, Text, WrapperActor
} from './styled'

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

    const { cast } = movie;

  return (
    <>
      {cast
        ? cast.map(({ profile_path, original_name, character }) => {
            return (
              <WrapperActor key={original_name}>
                <Image
                  src={profile_path ? apiURL + profile_path : 'Image not found'}
                  alt="actor"
                />
                ,<Text>{original_name}</Text>
                <Text>Character: {character}</Text>
              </WrapperActor>
            );
          })
        : ''}{' '}
      
      
    </>
  );}
      
export default MovieDetailsCast;
