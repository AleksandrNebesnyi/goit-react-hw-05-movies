import { NavLink, useRouteMatch } from 'react-router-dom';
import { List, Item } from './MovieList.styled';

import PropTypes from 'prop-types';
// import MoviePreview from '../MoviePreview';

// Комопнент списка фильмов, принимает фильмы и location от withRouter

const MovieList = ({ movies, location }) => {
  return (
    <List>
      {movies.map(({ id, original_title }) => (
        <Item key={id}>
          <NavLink
            to={{
              pathname: `movies/${id}`, // Заменяем стандартный путь в to
              state: { from: location }, // Передает данные из текущего маршрута в следующий
            }}
            className="link"
          >
            {original_title}
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
