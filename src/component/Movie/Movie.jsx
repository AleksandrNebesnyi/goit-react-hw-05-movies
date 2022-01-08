import { Wrapper, Descriptions, Title, Label } from './Movie.styled';

const Movie = ({ movie }) => {
  return (
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
          {movie?.genres ? movie.genres.map(genr => `${genr.name}, `) : null}
        </p>
      </Descriptions>
    </Wrapper>
  );
};

export default Movie;
