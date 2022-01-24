import { useEffect, useState } from 'react';
import { fetchTrends } from 'api/TMBD-movie-api';
import { useLocation } from 'react-router-dom';
import { Title } from './HomePage.styled';
import MovieList from '../../component/MovieList/MovieList';
import ErrorMessage from 'component/ErrorMessage/ErrorMasage';

const Home = () => {
  const location = useLocation();
  const [trends, setTrends] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTrends()
      .then(data => setTrends(data.results))
      .catch(error => setError(error));
  }, []);

  return (
    <>
      <Title>Tranding Today</Title>
      {trends && trends.length > 0 && (
        <MovieList movies={trends} location={location} />
      )}
      {error && <ErrorMessage message={error.message} />}
    </>
  );
};

export default Home;
