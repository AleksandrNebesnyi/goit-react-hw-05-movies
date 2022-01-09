import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Searchbar from '../../component/Searchbar/Searchbar';
import { fetchMoviesBySearch } from '../../api/TMBD-movie-api';
import MovieList from '../../component/MovieList/MovieList';
import { ToastContainer } from 'react-toastify';
import Loader from '../../component/Loader/Loader';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import queryString from 'query-string';

const MoviePage = () => {
  const location = useLocation();
  const history = useHistory();
  const { search } = location;
  const { query } = queryString.parse(search);

  const [searchQuery, setSearchQuery] = useState(query || '');
  const [currentPage, setCurrentPage] = useState('1');
  const [movies, setMovies] = useState(
    location.state ? location.state.movies : [],
  );
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  // Запрос за картинками при обновлении инпута
  useEffect(() => {
    if (!searchQuery) return;

    getMovies();
  }, [searchQuery]);

  // Принимаем с формы запрос и пишем в стейт + сбрасываем после отправки значения из стейта

  const handleOnSubmit = searchQuery => {
    setMovies([]);
    setSearchQuery(searchQuery);
    setCurrentPage(1);
    setError(null);

    // После поиска пишет в search истории шаблонную строку
    history.push({
      ...location,
      search: `query=${searchQuery}`,
    });
  };

  //   //  Скролл при клике на кнопку
  const scrollOnLoadButton = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  // Фетч фильма по запросу из инпута
  const getMovies = async () => {
    setLoading(true);
    try {
      const { results } = await fetchMoviesBySearch(searchQuery, currentPage);

      if (results.length === 0) {
        toast.info('Введите валидний запрос');
      }

      setMovies(prev => [...prev, ...results]);
      setCurrentPage(prev => prev + 1);
      setLoading(true);
      if (currentPage !== 1) {
        scrollOnLoadButton();
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  console.log('Movies', movies);
  return (
    <>
      <Searchbar onSubmit={handleOnSubmit} />
      {movies && movies.length > 0 && (
        <MovieList movies={movies} location={location} />
      )}
      {isLoading && <Loader />}
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default MoviePage;
