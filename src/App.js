import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Container from './component/Container/Container';
import AppBar from './component/AppBar/AppBar';
// import HomePage from './Pages/HomePage/HomePage.jsx';
// import MoviePage from './Pages/MoviePage/MoviePage.jsx';
// import ErrorMessage from './component/ErrorMessage/ErrorMasage';
// import MovieDetailsPage from './Pages/MovieDetailsPage/MovieDetailsPage.jsx';
import Loader from 'component/Loader/Loader.jsx';
import { ToastContainer } from 'react-toastify';
import Searchbar from 'component/Searchbar/Searchbar';

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

const Cast = lazy(() =>
  import('Pages/Cast/Cast.jsx' /* webpackChunkName: "cast" */),
);
const Reviews = lazy(() =>
  import('Pages/Reviews/Reviews.jsx' /* webpackChunkName: "reviews" */),
);

const App = () => {
  return (
    <Container>
      <AppBar />
      {/* Роутинг приложения */}
      <Suspense fallback={Loader}>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="movies" element={<MoviePage />} />

          <Route path="movies/:id" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route
            path="*"
            element={<ErrorMessage message="Страница не найдена" />}
          />
        </Routes>
      </Suspense>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Container>
  );
};

export default App;
