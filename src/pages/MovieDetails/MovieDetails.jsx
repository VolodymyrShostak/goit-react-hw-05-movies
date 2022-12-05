import React, { useState, useEf } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { apiURL, GeterFilmDetailsInfo } from '../../components/api';
import {
  Wrapper,
  Poster,
  Description,
  Text,
  Title,
  
} from './styled'

// import PropTypes from 'prop-types';
function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');

  useEffect(() => {
    async function getFilm(movieId) {
      try {
        const { data } = await GeterFilmDetailsInfo(movieId);

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

  const { title, overview, genres, release_date, vote_average, poster_path } =
    movie;

  return (
    <Wrapper>
      <Poster
        src={
          poster_path ? apiURL + poster_path : 'Poster not available'

          //     }
        }
        alt={title}
      />
      <Description>
        <Title>{title}</Title>

        <p>{overview}</p>

        <p>
          <Text>Genres: </Text>
          {genres ? genres.map(gen => gen.name).join(', ') : ''}
        </p>
        <p>
          <Text>Release Date: </Text> {release_date}
        </p>
        <p>
          <Text>Rating: </Text> {vote_average}
        </p>
      </Description>

      {/* <WrapperBtn>
        <Link to="cast" >
          Cast
        </Link> */}
      {/* <Link to="reviews" >
          Reviews
        </Link> */}
      {/* </WrapperBtn> */}

      <Outlet />
    </Wrapper>
  );
}

export default MovieDetails;
