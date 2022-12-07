import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { useSearchParams } from 'react-router-dom';
import { Searchbar } from '../components/Searchbar/Searchbar';
import FilmList from '../components/SearchFilmList/SearchFilmList';
import { GeterFilmsByKeyWord } from '../components/api';
import 'react-toastify/dist/ReactToastify.css';




const FilmListBySearch = () => {
  
  const [films, setFilms] = useState([]);
  const [searchParams] = useSearchParams();
 
const keyWord = searchParams.get('query') ?? '';
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
   
  }, [keyWord]);

  

  return (
    <>
      <Searchbar />
      <ToastContainer autoClose={3000} />
      {films && <FilmList films={films} />}
    </>
  );
};

export default FilmListBySearch;
