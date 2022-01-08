import { useState, useEffect } from 'react';
import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useRouteMatch, useLocation, useHistory } from 'react-router-dom';
// import Cast from 'Pages/Cast/Cast.jsx';
// import Reviews from 'Pages/Reviews/Reviews.jsx';
import MovieNavigation from 'component/MovieNavigation/MovieNavigation.jsx';
import GoBackButton from '../../component/GoBackButton/GoBackBatton';
import { fetchMovieById } from '../../api/TMBD-movie-api';
import Movie from 'component/Movie/Movie.jsx';
import Loader from 'component/Loader/Loader.jsx';
import PropTypes from 'prop-types';
import { NavMenu } from './MovieDetailsPage';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});

  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch();

  const Cast = lazy(() =>
    import('Pages/Cast/Cast.jsx' /* webpackChunkName: "cast" */),
  );
  const Reviews = lazy(() =>
    import('Pages/Reviews/Reviews.jsx' /* webpackChunkName: "reviews" */),
  );

  // Запрос при маунте
  useEffect(() => {
    const movieId = match.params.movieId; // Получаем id фильма из match.params
    fetchMovieById(movieId).then(data => {
      setMovie(data);
    });
  }, [match.params.movieId]);

  // Функция для кнопки "Назад"
  function handleGoBack() {
    history.push(location?.state?.from || '/');
  }

  return (
    <>
      <GoBackButton onBack={handleGoBack} />
      {movie && <Movie movie={movie} />}

      <NavMenu>{movie && <MovieNavigation />}</NavMenu>

      <Suspense fallback={Loader}>
        <Switch>
          <Route path={`${match.path}/cast`} component={Cast} />
          <Route path={`${match.path}/reviews`} component={Reviews} />
        </Switch>
      </Suspense>
    </>
  );
};

MovieDetailsPage.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default MovieDetailsPage;
