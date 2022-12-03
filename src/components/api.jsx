import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '50f0044b98fb36babd948adb82a325bf';
const AMOUNT_PAGE = 20;

export async function GeterPictures(name, page) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page: page,
        q: name,
        per_page: AMOUNT_PAGE,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
export default AMOUNT_PAGE;
// 50f0044b98fb36babd948adb82a325bf
// https://api.themoviedb.org/3/movie/550?api_key=50f0044b98fb36babd948adb82a32
// https://api.themoviedb.org/3/trending/all/day?api_key=50f0044b98fb36babd948adb82a325bf
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1