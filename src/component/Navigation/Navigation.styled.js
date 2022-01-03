import styled from '@emotion/styled';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0px auto;
  padding: 0px 15px;
  max-width: 1170px;
`;
export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;
export const Link = styled.link`
  display: block;
  padding-top: 20px;
  padding-bottom: 20px;

  color: currentColor;

  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export const LinkActive = styled.link`
  color: red;
  font-weight: 500;

  text-decoration: none;
`;
