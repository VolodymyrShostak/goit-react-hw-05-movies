import React, { useState, useEffect,Link } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { apiURL, GeterFilmDetailsInfo } from '../../components/api';
import {
  Wrapper,
  Image,
  Desc,
  TextWrap,
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
      <Image
        src={
          poster_path ? apiURL + poster_path : 'Poster not available'

          //     }
        }
        alt={title}
      />
      <Desc>
        <Title>{title}</Title>

        <p>{overview}</p>

        <p>
          <TextWrap>Genres: </TextWrap>
          {genres ? genres.map(gen => gen.name).join(', ') : ''}
        </p>
        <p>
          <TextWrap>Release Date: </TextWrap> {release_date}
        </p>
        <p>
          <TextWrap>Rating: </TextWrap> {vote_average}
        </p>
      </Desc>

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
