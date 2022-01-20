import { Outlet } from 'react-router-dom';
import { Nav, List, Item, NavLinkStyled } from './Navigation.styled';

export default function Navigation() {
  return (
    <>
      <Nav>
        <List>
          <Item>
            <NavLinkStyled to="/">Home</NavLinkStyled>
          </Item>
          <Item>
            <NavLinkStyled to="/movies">Movies</NavLinkStyled>
          </Item>
        </List>
      </Nav>

      <Outlet />
    </>
  );
}
