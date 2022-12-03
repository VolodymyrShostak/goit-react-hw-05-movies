// import PropTypes from 'prop-types';
// import { FilmItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Wrapper, Title, Link } from './styled';
import { FilmItem } from '../FilmItem/FilmItem';
import { useState, useEffect } from 'react';
import { GeterTrendFilms } from '../api';

const FilmList = () => {
  const [films, setFilms] = useState([]);

  
  console.log(GeterTrendFilms());

  useEffect(() => {
    async function getFilms() {
      try {
          const data = await GeterTrendFilms();
          
          console.log(data);
          
        setFilms(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    getFilms();
  }, []);

  console.log(films);

  return (
    <Wrapper>
      <Title>Trending today</Title>
      <ul>
        {films.map(film => {
          return (
            <FilmItem key={film.id}>
              <Link to={`movie/${film.id}`}>{film.title}</Link>
            </FilmItem>
          );
        })}
      </ul>
    </Wrapper>
  );
};
export default FilmList;
// FilmList.propTypes = {
//   pictures: PropTypes.array.isRequired,
//   onClick: PropTypes.func.isRequired,
// };
