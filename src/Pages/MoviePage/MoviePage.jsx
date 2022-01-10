import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Searchbar from '../../component/Searchbar/Searchbar';
import { fetchMoviesBySearch } from '../../api/TMBD-movie-api';
import MovieList from '../../component/MovieList/MovieList';
import { ToastContainer } from 'react-toastify';
import Loader from '../../component/Loader/Loader';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorMessage from 'component/ErrorMessage/ErrorMasage';
import queryString from 'query-string';

const MoviePage = () => {
  const location = useLocation();
  const history = useHistory();
  const { search } = location;
  const { query } = queryString.parse(search);

console.log("location",location);
console.log("history",history);
console.log("query ", query );


  const [searchQuery, setSearchQuery] = useState(query || '');
  const [currentPage, setCurrentPage] = useState('1');
  const [movies, setMovies] = useState([]);
  // eslint-disable-next-line
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  // Запрос за картинками при обновлении инпута
  useEffect(() => {
    if (!searchQuery) return;

    getMovies();
    // eslint-disable-next-line
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
      ErrorMessage({error});
      
    } finally {
      setLoading(false);
     
    }
  };

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
