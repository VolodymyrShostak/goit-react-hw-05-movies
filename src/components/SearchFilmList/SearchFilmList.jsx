import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { StyledLink } from './styled';

             
const FilmList = ({ films }) => {
  const location = useLocation();
    
  console.log(location)
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

FilmList.propTypes = {
  films: PropTypes.array.isRequired,
  
};
