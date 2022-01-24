import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import MovieNavigation from 'component/MovieNavigation/MovieNavigation';
import GoBackButton from 'component/GoBackButton/GoBackBatton';
import { fetchMovieById } from 'api/TMBD-movie-api';
import Movie from 'component/Movie/Movie.jsx';
import ErrorMessage from 'component/ErrorMessage/ErrorMasage';

import PropTypes from 'prop-types';
import { NavMenu } from './MovieDetailsPage.styled';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [movie, setMovie] = useState({});
  const [error, setError] = useState(null);

  // Запрос при маунте
  useEffect(() => {
    fetchMovieById(id)
      .then(data => {
        setMovie(data);
      })
      .catch(error => setError(error));
  }, [id]);

  // Функция для кнопки "Назад"
  function handleGoBack() {
    // navigate(-1);
    navigate(location?.state?.from ?? '/');
  }

  return (
    <>
      <GoBackButton onBack={handleGoBack} />
      {movie && <Movie movie={movie} />}
      <NavMenu>{movie && <MovieNavigation />}</NavMenu>
      {error && <ErrorMessage message={error.message} />}
    </>
  );
};

MovieDetailsPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default MovieDetailsPage;
