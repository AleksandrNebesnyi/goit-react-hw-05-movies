import { useRouteMatch, useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List, Item } from './MovieNavigation';

// Меню актёров и обзоров
const MovieNavigation = () => {
  const location = useLocation();
  const match = useRouteMatch();

  return (
    <div>
      <b>Additional information</b>

      <List>
        <Item>
          <NavLink
            to={{
              pathname: `${match.url}/cast`, // Формирует путь для ссылки
              state: { ...location.state }, // Передает полученый стейт при переходе на актёров
            }}
            className="link--movieNavigation"
            activeClassName="link--movieNavigation__active"
          >
            Cast
          </NavLink>
        </Item>
        <li>
          <NavLink
            to={{
              pathname: `${match.url}/reviews`, // Формирует путь для ссылки
              state: { ...location.state }, // Передает полученый стейт при переходе на обзоры
            }}
            className="link--movieNavigation"
            activeClassName="link--movieNavigation__active"
          >
            Reviews
          </NavLink>
        </li>
      </List>
    </div>
  );
};

MovieNavigation.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default MovieNavigation;
