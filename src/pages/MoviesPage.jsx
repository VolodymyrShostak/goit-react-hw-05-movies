import React from 'react';
import { useState, useEffect } from 'react';
import { Searchbar } from '../components/Searchbar/Searchbar'
import SearchFilmList from '../components/SearchFilmList/SearchFilmList';
import { ToastContainer } from 'react-toastify';
// import { useState, useEffect } from 'react';


const FilmList = () => {
  const [films, setFilms] = useState([]);
   // const [loader, setLoader] = useState(false);
 
  useEffect(() => {
    // if(keyWord) loadSearchingImg();
    //     // eslint-disable-next-line
    //   }, [keyWord, page]);

    const onSearchFilm = keyWord => {
      setFilms([]);
        }
  });
        return (
      <>
        <Searchbar  />
        <ToastContainer autoClose={3000} />
        <SearchFilmList />
      </>
    );
  };
export default FilmList;
