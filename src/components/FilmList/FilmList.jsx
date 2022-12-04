// import PropTypes from 'prop-types';
// import { FilmItem } from '../ImageGalleryItem/ImageGalleryItem';
import { StyledLink} from './styled';
// import { FilmItem } from '../FilmItem/FilmItem';
import { useState, useEffect } from 'react';
import { GeterTrendFilms } from '../api';



const FilmList = () => {
    const [films, setFilms] = useState([]);
    
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
console.log(films)
  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {films.map(film => (
          <li key={film.id}>
            <StyledLink to={`/movies/${film.id}`}>
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
