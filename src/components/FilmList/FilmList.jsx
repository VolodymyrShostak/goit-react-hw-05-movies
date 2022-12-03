import React from 'react';
import PropTypes from 'prop-types';
// import { FilmItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Wrapper } from './styled';
import { FilmItem } from '../FilmItem/FilmItem'

export const FilmList = ({ pictures, onClick = () => {} }) => {
  return (
    <Wrapper>
      {pictures.map(({ id, webformatURL, largeImageURL, tags }) => (
        <FilmItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
          onClick={onClick}
        />
      ))}
    </Wrapper>
  );
};

FilmList.propTypes = {
  pictures: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
