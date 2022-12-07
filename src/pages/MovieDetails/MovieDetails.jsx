import { Loader } from 'components/Loader/Loader';
import React, { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, NavLink, useLocation } from 'react-router-dom';
import { apiURL, GeterFilmDetailsInfo } from '../../components/api';

import {
  Wrapper,
  Poster,
  Description,
  Text,
  Title,
  WrapperLink,
  Title2,
  BackToButton,
} from './styled';

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');
  const location = useLocation();
  const linkBack = location?.state?.from;

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

  const { title, overview, genres, release_date, vote_average, poster_path } =
    movie;

  return (
    <>
      <BackToButton type="button" to={linkBack}>{`<< Back To`}</BackToButton>
      {movie && (
        <Wrapper>
          <Poster
            src={poster_path ? apiURL + poster_path : 'Poster not available'}
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
        </Wrapper>
      )}
      <Title2>Additional Information</Title2>
      <WrapperLink>
        <NavLink to="cast" state={{ from: location?.state?.from }}>
          Cast
        </NavLink>
        <NavLink to="reviews" state={{ from: location?.state?.from }}>
          Reviews
        </NavLink>
      </WrapperLink>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default MovieDetails;
