import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MovieNavigation from 'component/MovieNavigation/MovieNavigation.jsx';
import GoBackButton from 'component/GoBackButton/GoBackBatton';
import { fetchMovieById } from 'api/TMBD-movie-api';
import Movie from 'component/Movie/Movie.jsx';

import PropTypes from 'prop-types';
import { NavMenu } from './MovieDetailsPage';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState({});

  // Запрос при маунте
  useEffect(() => {
    fetchMovieById(id).then(data => {
      setMovie(data);
    });
  }, [id]);

  // Функция для кнопки "Назад"
  function handleGoBack() {
    navigate(-1);
  }

  return (
    <>
      <GoBackButton onBack={handleGoBack} />
      {movie && <Movie movie={movie} />}
      <NavMenu>{movie && <MovieNavigation />}</NavMenu>
    </>
  );
};

MovieDetailsPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default MovieDetailsPage;
