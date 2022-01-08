import { Route, Switch } from 'react-router-dom';
// import { Suspense, lazy } from 'react';
import Container from './component/Container/Container';
import AppBar from './component/AppBar/AppBar';
import Home from './Pages/Home/Home.jsx';
import MoviePage from './Pages/MoviePage/MoviePage.jsx';
import ErrorMessage from './component/ErrorMessage/ErrorMasage';
// import Loader from './component/Loader/Loader.jsx';
import MovieDetailsPage from './Pages/MovieDetailsPage/MovieDetailsPage.jsx';

// const Home = lazy(() =>
//   import('./Pages/Home/Home' /* webpackChunkName: "home-page" */),
// );
// const MoviePage = lazy(() =>
//   import('./Pages/MoviePage/MoviePage' /* webpackChunkName: "movie-page" */),
// );
// const MovieDetailsPage = lazy(() =>
//   import(
//     './Pages/MovieDetailsPage/MovieDetailsPage.jsx' /* webpackChunkName: "movie-details-page" */
//   ),
// );
// const ErrorMessage = lazy(() =>
//   import(
//     './component/ErrorMessage/ErrorMasage.jsx' /* webpackChunkName: "404-page" */
//   ),
// );

// const Cast = lazy(() =>
//   import('./Pages/Cast/Cast.jsx' /* webpackChunkName: "cast" */),
// );
// const Reviews = lazy(() =>
//   import('./Pages/Reviews/Reviews.jsx' /* webpackChunkName: "reviews" */),
// );

const App = () => {
  return (
    <Container>
      <AppBar />
      {/* Роутинг приложения */}

      <Switch>
        <Route path="/" exact>
          <Home />
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
    </Container>
  );
};

export default App;
