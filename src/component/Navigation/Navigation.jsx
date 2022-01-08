import { NavLink } from 'react-router-dom';
import { Nav, List, Item } from './Navigation.styled';

export default function Navigation() {
  return (
    <Nav>
      <List>
        <Item>
          <NavLink exact to="/" className="link" activeClassName="link__active">
            Home
          </NavLink>
        </Item>
        <Item>
          <NavLink to="/movies" className="link" activeClassName="link__active">
            Movies
          </NavLink>
        </Item>
      </List>
    </Nav>
  );
}
