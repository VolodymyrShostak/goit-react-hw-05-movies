import axios from 'axios';

 export const GeterTrendFilms= async() =>{
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/all/day?api_key=50f0044b98fb36babd948adb82a325bf'
    );
    return response;
  } catch (error) {
    
  }
     
     }

  export const GeterFilmsByKeyWord = async () => {
    const response = await axios.get(
      'https://api.themoviedb.org/3/search/movie?api_key=50f0044b98fb36babd948adb82a325bf&language=en-US&page=1&include_adult=false'
    );
    return response;
  };

export const GeterFilmDetailsInfo = async () => {
   const response = await axios.get('https://api.themoviedb.org/3/movie/{movie_id}?api_key=50f0044b98fb36babd948adb82a325bf&language=en-US ')
   return response;
};
 
export const GeterFilmActorsTeam = async () => {
   const response = await axios.get('https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=50f0044b98fb36babd948adb82a325bf&language=en-US ')
   return response;
};

export const GeterCommentsFilm = async () => {
   const response = await axios.get('https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1 ')
   return response;
};





// 50f0044b98fb36babd948adb82a325bf
// https://api.themoviedb.org/3/movie/550?api_key=50f0044b98fb36babd948adb82a32

// https://api.themoviedb.org/3/trending/all/day?api_key=50f0044b98fb36babd948adb82a325bf
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1