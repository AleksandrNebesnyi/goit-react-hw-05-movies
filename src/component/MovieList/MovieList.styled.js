import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;

  margin-left: -20px;
  margin-top: -20px;
  padding: 20px 0;
`;

export const Item = styled.li`
  flex-basis: calc(100% / 3 - 20px);
  margin-left: 20px;
  margin-top: 20px;

  opacity: 1;

  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #02be6e;

    opacity: 0.8;

    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const Card = styled.div`
  position: relative;
  border-radius: 5px;
`;

export const Thumb = styled.div`
  height: 400px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px 5px 0 0;

  object-fit: contain;
  object-position: top;
`;

export const Title = styled.p`
  display: flex;
  justify-content: center;
  padding: 10px;

  font-size: 18px;
`;

export const MovieListLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
`;
