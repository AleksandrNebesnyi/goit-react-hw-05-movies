import axios from 'axios';
const API_KEY = '7cc503898229934d2a9c34d2b66bc7f6';
const BASE_URL = 'https://api.themoviedb.org/3/';

async function FetchMovies(url = '') {
  const response = await fetch(url);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchTrends() {
  return FetchMovies(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`);
}
//https://api.themoviedb.org/3/trending/movie/day?api_key=7cc503898229934d2a9c34d2b66bc7f6
// https://api.themoviedb.org/3/search/movie?api_key=7cc503898229934d2a9c34d2b66bc7f6&query=cat&page=1&language=en-US

// Фетч по поиску
export const fetchMoviesBySearch = async (searchQuery, currentPage) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}search/movie?api_key=${API_KEY}&query=${searchQuery}&page=${currentPage}&language=en-US`,
    );

    const results = data.results;

    return results;
  } catch (error) {
    console.error('Smth wrong with fetch movie search in api', error);
  }
};
// export function fetchMoviesBySearch(searchQuery, currentPage) {
//   return FetchMovies(
//     `search/movie?api_key=${API_KEY}&query=${searchQuery}&page=${currentPage}&language=en-US`,
//   );
// }

// Фетч актёров для фильма
export const fetchCast = async id => {
  try {
    const { data } = await axios.get(
      `/movie/${id}/credits?api_key=${API_KEY}&language=en-US`,
    );

    return data;
  } catch (error) {
    console.error('Smth wrong with fetch cast in api', error);
  }
};

// Фетч отзывов на фильм
export const fetchReviews = async id => {
  try {
    const { data } = await axios.get(
      `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
    );

    return data;
  } catch (error) {
    console.error('Smth wrong with fetch reviews in api', error);
  }
};

// Фетч фильма по id
export const fetchMovieById = async id => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`,
    );

    return data;
  } catch (error) {
    console.error('Smth wrong with fetch movie id in api', error);
  }
};

// export function fetchMovieById(id) {
//   return FetchMovies(`/movie/${id}?api_key=${API_KEY}&language=en-US`);
// }

// export function fetchCast(id) {
//   return FetchMovies(`/movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
// }

// export function fetchReviews(id) {
//   return FetchMovies(
//     `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
//   );
// }
