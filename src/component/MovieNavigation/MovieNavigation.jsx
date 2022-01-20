import { Outlet, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List, Item, MovieNavigationLink } from './MovieNavigation';

// Меню актёров и обзоров
const MovieNavigation = () => {
  const location = useLocation();

  return (
    <div>
      <b>Additional information</b>

      <List>
        <Item>
          <MovieNavigationLink
            to={{
              pathname: `cast `, // Формирует путь для ссылки
              state: { ...location.state }, // Передает полученый стейт при переходе на актёров
            }}
          >
            Cast
          </MovieNavigationLink>
        </Item>
        <Item>
          <MovieNavigationLink
            to={{
              pathname: `reviews`, // Формирует путь для ссылки
              state: { ...location.state }, // Передает полученый стейт при переходе на обзоры
            }}
          >
            Reviews
          </MovieNavigationLink>
        </Item>
      </List>
      <Outlet />
    </div>
  );
};

MovieNavigation.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default MovieNavigation;
