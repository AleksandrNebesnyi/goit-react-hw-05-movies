import { useState, useEffect } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import { useRouteMatch, useLocation, useHistory } from 'react-router-dom';
// import { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  Descriptions,
  Title,
  Label,
  NavMenu,
} from './MovieDetailsPage';

import GoBackButton from '../../component/GoBackButton/GoBackBatton';
// import Movie from '../../components/Movie';

// import MovieNavigation from '../../component/MovieNavigation/MovieNavigation';
// console.log(MovieNavigation);
// import Loader from '../../component/Loader/Loader';
import { fetchMovieById } from '../../api/TMBD-movie-api';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  // const [isLoading, setLoading] = useState(false);

  // const [error, setError] = useState(null);

  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch();

  console.log('match', match);
  // console.log(match.url);
  // console.log(location);
  // const Cast = lazy(() =>
  //   import('./Pages/Cast/Cast.jsx' /* webpackChunkName: "cast" */),
  // );
  // const Reviews = lazy(() =>
  //   import('./Pages/Reviews/Reviews.jsx' /* webpackChunkName: "reviews" */),
  // );
  // Запрос при маунте
  useEffect(() => {
    // getData();
    const movieId = match.params.movieId; // Получаем id фильма из match.params
    fetchMovieById(movieId).then(data => {
      setMovie(data);
    });
  }, [match.params.movieId]);

  // Функция запроса за фильмом
  // const getData = async () => {
  //   const { movieId } = match.params; // Получаем id фильма из match.params

  //   setLoading(true);

  //   try {
  //     const result = await fetchMovieById(movieId);

  //     setMovie(result);
  //   } catch (error) {
  //     setError({ error });
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // Функция для кнопки "Назад"
  function handleGoBack() {
    history.push(location?.state?.from || '/');
  }

  return (
    <>
      <GoBackButton onBack={handleGoBack} />

      <>
        <Wrapper>
          {movie.poster_path ? (
            <img
              src={'https://image.tmdb.org/t/p/w300' + movie.poster_path}
              alt={movie?.title}
            />
          ) : null}
          <Descriptions>
            <Title>{movie?.original_title}</Title>
            <p>
              <Label>User Score:</Label> {movie?.vote_average * 10 + '%'}
            </p>
            <p>
              <Label>Overview:</Label> {movie?.overview}
            </p>
            <p>
              <Label>Genres:</Label>{' '}
              {movie?.genres
                ? movie.genres.map(genr => `${genr.name}, `)
                : null}
            </p>
          </Descriptions>
        </Wrapper>
        <p Label>Additionals Information</p>
        <NavMenu>
          <>
            <NavLink
              to={{
                pathname: `${match.url}/cast`,
                state: { ...location.state },
              }}
              className="link"
              activeClassName="link__active"
            >
              Cast
            </NavLink>
            <NavLink
              to={{
                pathname: `${match.url}/reviews`,
                state: { ...location.state },
              }}
              className="link"
              activeClassName="link__active"
            >
              Reviews
            </NavLink>
            {/* <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route path={'/movies/:movieId/cast'} component={Cast} />
                <Route path={'/movies/:movieId/reviews'} component={Reviews} />
              </Switch>
            </Suspense> */}
          </>
        </NavMenu>

        <Switch>
          <Route path={'/movies/:movieId/cast'}>{match.url}</Route>
          <Route path={'/movies/:movieId/reviews'}>"badd"</Route>
        </Switch>
      </>
      {/* {movie && <Movie movie={movie} />} */}

      {/* {movie && <MovieNavigation />} */}

      {/* Роутинг на основе match.path */}

      {/* {isLoading && <Loader />} */}
    </>
  );
};

MovieDetailsPage.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default MovieDetailsPage;
