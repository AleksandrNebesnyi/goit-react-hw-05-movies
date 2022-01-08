import { useEffect, useState } from 'react';
import * as fetchMovieApi from '../../api/TMBD-movie-api';
import { useLocation } from 'react-router-dom';
import { Title } from './Home.styled';
import MovieList from '../../component/MovieList/MovieList';

const Home = () => {
  const location = useLocation();
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    fetchMovieApi.fetchTrends().then(data => setTrends(data.results));
  }, []);

  return (
    <>
      <Title>Tranding Today</Title>
      {trends && trends.length > 0 && (
        <MovieList movies={trends} location={location} />
      )}
    </>
  );
};

export default Home;
