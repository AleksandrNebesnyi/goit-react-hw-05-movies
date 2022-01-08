import styled from '@emotion/styled';

export const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  cursor: default;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;

  margin-left: -20px;
  margin-top: -20px;
  padding: 20px 0;
`;

export const Item = styled.li`
  flex-basis: calc(100% / 2 - 20px);
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
