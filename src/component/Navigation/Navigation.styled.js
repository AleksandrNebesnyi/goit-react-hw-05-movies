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
  margin: 0 auto;
  margin-top: 20px;
  width: 100px;
  padding: 8px 16px;
  border-radius: 2px;
  background-color: #3f51b5;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover,
  :focus {
    background-color: #303f9f;
  }
  &:not(:last-child) {
    margin-right: 20px;
  }
`;
export const Link = styled.link`
  display: block;
  padding-top: 20px;
  padding-bottom: 20px;

  color: black;

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
