// import PropTypes from 'prop-types';
// import { FilmItem } from '../ImageGalleryItem/ImageGalleryItem';
import { StyledLink } from './styled';
// import { FilmItem } from '../FilmItem/FilmItem';
import { useState, useEffect } from 'react';
import { GeterFilmsByKeyWord } from '../api';
import { keyWord } from 'components/Searchbar/Searchbar';

const FilmList = (keyWord) => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function getFilms() {
      try {

        const { data } = await GeterFilmsByKeyWord();

        setFilms(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    getFilms();
  }, []);
  console.log(films);
  return (
    <>
      
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
