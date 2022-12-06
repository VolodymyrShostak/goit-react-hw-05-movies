import React from 'react';
import { useState, useEffect } from 'react';
import { Searchbar } from '../components/Searchbar/Searchbar';
import FilmList from '../components/SearchFilmList/SearchFilmList';
import { GeterFilmsByKeyWord } from '../components/api';
import { ToastContainer } from 'react-toastify';
// import { SearchFilmList } from '../components/SearchFilmList/SearchFilmList'  

const FilmListBySearch = () => {
  const [keyWord, setKeyWord] = useState('');
  const [films, setFilms] = useState([]);
  // const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (!keyWord) return;
    async function getFilms(word) {
      try {
        const { data } = await GeterFilmsByKeyWord(word);

        setFilms(data.results);
      } catch (error) {
        console.log(error);
      }
      
    }
    getFilms(keyWord);
    // eslint-disable-next-line
  }, [keyWord]);

  

  return (
    <>
      <Searchbar onSubmit={setKeyWord} />
      <ToastContainer autoClose={3000} />
      <FilmList films={films} />
    </>
  );
};

export default FilmListBySearch;
