import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 1200px;
`;

export const Item = styled.li`
  display: flex;
  width: 280px;
  margin-right: 10px;
  margin-bottom: 10px;
  background: rgb(240, 240, 240);
`;

export const Description = styled.p`
  margin: 0;
  padding: 10px;
  margin-left: 10px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Label = styled.span`
  font-weight: 700;
`;
