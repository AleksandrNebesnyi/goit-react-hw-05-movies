import { NavLink } from 'react-router-dom';
import { List, Item, Card, Thumb, Img, Title } from './MovieList.styled';

import PropTypes from 'prop-types';

// Комопнент списка фильмов, принимает фильмы и location

const MovieList = ({ movies, location }) => {
  return (
    <List>
      {movies.map(({ id, original_title, poster_path }) => (
        <Item key={id}>
          <NavLink
            to={{
              pathname: `movies/${id}`, // Заменяем стандартный путь в to
              state: { from: location }, // Передает данные из текущего маршрута в следующий
            }}
            className="link"
          >
            {
              <Card>
                <Thumb>
                  <Img
                    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    alt={original_title}
                    title={original_title}
                  />
                </Thumb>
                <Title>{original_title}</Title>
              </Card>
            }
          </NavLink>
        </Item>
      ))}
    </List>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    }),
  ),
  location: PropTypes.object.isRequired,
};

export default MovieList;

// <div className={styles.card}>
//   <div className={styles.thumb}>
//     <img
//       src={posterUrl}
//       alt={title}
//       title={title}
//       className={styles.poster}
//     />
//   </div>

//   <p className={styles.text}>
//     <span>{title}</span>
//     {vote ? <b className={voteStyle}>{vote}</b> : null}
//   </p>
// </div>;
