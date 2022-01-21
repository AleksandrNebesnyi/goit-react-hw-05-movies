import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Searchbar from 'component/Searchbar/Searchbar';
import { fetchMoviesBySearch } from 'api/TMBD-movie-api';
import MovieList from 'component/MovieList/MovieList';
import Button from 'component/Button/Button';
import Loader from 'component/Loader/Loader';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorMessage from 'component/ErrorMessage/ErrorMasage';

const MoviePage = () => {
  let navigation = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');

  const [searchQuery, setSearchQuery] = useState(query || '');
  const [currentPage, setCurrentPage] = useState('1');
  const [movies, setMovies] = useState([]);

  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  // Запрос за картинками при обновлении инпута
  useEffect(() => {
    if (!searchQuery) return;

    // Фетч фильма по запросу из инпута
    const getMovies = async () => {
      setLoading(true);
      try {
        const { results } = await fetchMoviesBySearch(searchQuery, currentPage);

        if (results.length === 0) {
          toast.info('Введите валидний запрос');
        }

        setMovies(prev => [...prev, ...results]);
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

    getMovies();
  }, [currentPage, searchQuery]);

  // Принимаем с формы запрос и пишем в стейт + сбрасываем после отправки значения из стейта

  const handleOnSubmit = searchQuery => {
    setMovies([]);
    setSearchQuery(searchQuery);
    setCurrentPage(1);
    setError(null);

    // После поиска пишет в search  шаблонную строку
    navigation({
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
  // при клике на кнопку Load More увеличиваем страницу.
  const handleLoadMore = () => {
    setCurrentPage(prevState => prevState + 1);
  };

  return (
    <>
      <Searchbar onSubmit={handleOnSubmit} />
      {movies && movies.length > 0 && (
        <MovieList movies={movies} location={location} />
      )}
      {isLoading === false && movies.length >= 12 && (
        <Button onClick={handleLoadMore} />
      )}
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error.message} />}

      <ToastContainer
        autoClose={3000}
        />
    </>
  );
};

export default MoviePage;
