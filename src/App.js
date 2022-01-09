import { Route, Switch } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Container from './component/Container/Container';
import AppBar from './component/AppBar/AppBar';
// import HomePage from './Pages/HomePage/HomePage.jsx';
// import MoviePage from './Pages/MoviePage/MoviePage.jsx';
// import ErrorMessage from './component/ErrorMessage/ErrorMasage';
// import MovieDetailsPage from './Pages/MovieDetailsPage/MovieDetailsPage.jsx';
import Loader from 'component/Loader/Loader.jsx';

const HomePage = lazy(() =>
  import('Pages/HomePage/HomePage.jsx' /* webpackChunkName: "home-page" */),
);
const MoviePage = lazy(() =>
  import('Pages/MoviePage/MoviePage.jsx' /* webpackChunkName: "movie-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    'Pages/MovieDetailsPage/MovieDetailsPage.jsx' /* webpackChunkName: "movie-details-page" */
  ),
);
const ErrorMessage = lazy(() =>
  import(
    'component/ErrorMessage/ErrorMasage.jsx' /* webpackChunkName: "404-page" */
  ),
);

const App = () => {
  return (
    <Container>
      <AppBar />
      {/* Роутинг приложения */}
      <Suspense fallback={Loader}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviePage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route>
            <ErrorMessage />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
};

export default App;
