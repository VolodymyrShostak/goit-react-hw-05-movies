// import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { StyledLink } from './styled';
// import { FilmItem } from '../FilmItem/FilmItem';
// import { useState, useEffect } from 'react';
// import { GeterFilmsByKeyWord } from '../api';
// import { keyWord } from 'components/Searchbar/Searchbar';

const FilmList = ({ films }) => {
  const location = useLocation(); 
  

  
  console.log(films);
  return (
    <>
      <ul>
        {films.length > 0 &&
          films.map(film => (
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
// FilmList.propTypes = {
//   pictures: PropTypes.array.isRequired,
//   onClick: PropTypes.func.isRequired,
// };
