import axios from "axios";
const API_KEY = '7cc503898229934d2a9c34d2b66bc7f6';
axios.defaults.baseURL = "https://api.themoviedb.org/3/";

async function FetchMovies(url = '', config = {}){
  const response = await axios.get(url, config);

  return response.ok
    ? { response }
    : Promise.reject(new Error('404 Not found'));
};

export  function fetchTrends() {
  return FetchMovies(`trending/movie/day?api_key=${API_KEY}`)
};

export  function fetchMoviesBySearch (searchQuery, currentPage ) {
  return FetchMovies(`search/movie?api_key=${API_KEY}&query=${searchQuery}&page=${currentPage}&language=en-US`)
};

export function fetchMovieById(id) {
  return FetchMovies(`/movie/${id}?api_key=${API_KEY}&language=en-US`);
}

export function fetchCast(id) {
  return FetchMovies(`/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
}

export function fetchReviews(id) {
  return FetchMovies( `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
}




