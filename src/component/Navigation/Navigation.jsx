import { NavLink } from 'react-router-dom';
import { Nav, List, Item, Link, LinkActive } from './Navigation.styled';

export default function Navigation() {
  return (
    <Nav>
      <List>
        <Item>
          <NavLink exact to="/" className={Link} activeClassName={LinkActive}>
            Home
          </NavLink>
        </Item>
        <Item>
          <NavLink to="/movies" className={Link} activeClassName={LinkActive}>
            Movies
          </NavLink>
        </Item>
      </List>
    </Nav>
  );
}
