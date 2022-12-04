import React from 'react';
import { Searchbar } from '../components/Searchbar/Searchbar'
import { ToastContainer } from 'react-toastify';
// import { useState, useEffect } from 'react';


function MoviesPage() {
 
//   const [pictures, setPictures] = useState([]);
//   const [keyWord, setKeyWord] = useState('');
  
//   const [page, setPage] = useState(1);
//   const [loader, setLoader] = useState(false);


//   useEffect(() => {
   
// if(keyWord) loadSearchingImg();

   
//     // eslint-disable-next-line
//   }, [keyWord, page]);

//   const onSearchImage = keyWord => {
   
//     setKeyWord(keyWord);
//     setPictures([]);
//     setPage(1);
//   };

//   const loadSearchingImg = async () => {
//        setLoader(true);
//     setHideButton(true);
   
//     const data = await GeterPictures(keyWord, page);
//     if (!data.hits.length) {
//       setLoader(false);
//       return toast('Sorry, we did not find any pictures...');
//     }

//     setPictures([...pictures, ...data.hits]);
//     setLoader(false);
//   };

//   const onClickLoadMore = () => {
//     setPage(page + 1);
//   };
//   const onModalOpen = url => {
//     setModal(url);
//   };

//   const onModalClose = () => {
//     setModal('');
//   };

  return (
    <>
      <Searchbar />
      <ToastContainer autoClose={3000} />
      
    </>
  ); 
}
export default MoviesPage;
