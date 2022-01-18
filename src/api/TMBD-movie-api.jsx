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

export function fetchMoviesBySearch(searchQuery, currentPage) {
  return FetchMovies(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${searchQuery}&page=${currentPage}&language=en-US`,
  );
}

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

// Фетч актёров для фильма
export function fetchCast(id) {
  return FetchMovies(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`,
  );
}
// Фетч отзывов на фильм
export function fetchReviews(id) {
  return FetchMovies(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
  );
}
