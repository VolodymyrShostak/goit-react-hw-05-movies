import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apiURL, GeterFilmActorsTeam } from '../../components/api';
import {
  Image, Text, WrapperActor
} from './styled'
import { Loader } from '../Loader/Loader';

function MovieDetailsCast() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');
   const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getFilm(movieId) {
      try {
           setIsLoading(true);
        const { data } = await GeterFilmActorsTeam(movieId);

        setMovie(data);
      } catch (error) {
        console.log(error);
      }finally {
        setIsLoading(false);
      }
    }
    getFilm(movieId);
  }, [movieId]);

    const { cast } = movie;

  return (
    <>
      {isLoading && <Loader />}
      {movie.length === 0 ? (
        <h3>No casts</h3>
      ) : (
        cast.map(({ profile_path, original_name, character }) => {
          return (
            <WrapperActor key={original_name}>
              <Image
                src={profile_path ? apiURL + profile_path : 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM='
                alt="actor"
              />
              ,<Text>{original_name}</Text>
              <Text>Character: {character}</Text>
            </WrapperActor>
          );
        })
      )}{' '}
    </>
  );}
      
export default MovieDetailsCast;
