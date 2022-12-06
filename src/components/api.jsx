import axios from 'axios';

export const apiURL = 'https://image.tmdb.org/t/p/w500';

 export const GeterTrendFilms= async() =>{
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/all/day?api_key=50f0044b98fb36babd948adb82a325bf'
    );
    return response;
  } catch (error) {
    
  }
     
     }

export const GeterFilmsByKeyWord = async (search) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=50f0044b98fb36babd948adb82a325bf&query=${search}&page=1&language=en-US`
      );
      return response;
    } catch (error) {}
};
 

export const GeterFilmDetailsInfo = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=50f0044b98fb36babd948adb82a325bf&language=en-US `
  );
  return response;
};
 
export const GeterFilmActorsTeam = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=50f0044b98fb36babd948adb82a325bf&language=en-US `
  );
  return response;
};

export const GeterReviewsFilm = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=50f0044b98fb36babd948adb82a325bf&language=en-US&page=1 `
  );
  return response;
};





// 50f0044b98fb36babd948adb82a325bf
// https://api.themoviedb.org/3/movie/550?api_key=50f0044b98fb36babd948adb82a32

// https://api.themoviedb.org/3/trending/all/day?api_key=50f0044b98fb36babd948adb82a325bf
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1