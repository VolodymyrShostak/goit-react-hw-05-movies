import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { GeterTrendFilms } from '../api';
import { StyledLink } from './styled';

const FilmList = () => {
  const [films, setFilms] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function getFilms() {
      try {
        const { data } = await GeterTrendFilms();

        setFilms(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    getFilms();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {films.map(film => (
          <li key={film.id}>
            <StyledLink to={`/movies/${film.id}`} state={{ from: location }}>
              {film.title || film.name}
            </StyledLink>
          </li>
        ))}
      </ul>
    </>
  );
};
export default FilmList;
