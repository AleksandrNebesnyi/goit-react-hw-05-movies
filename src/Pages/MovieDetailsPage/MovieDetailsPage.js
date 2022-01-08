import styled from '@emotion/styled';

export const ButtonGoBack = styled.button`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  background-color: transparent;
  border: none;
  font-size: 20px;
  padding: 5px;
  font-weight: 700;
  &:hover,
  &:focus {
    color: rgb(206, 37, 121);
  }
`;
export const Wrapper = styled.div`
  display: flex;
  font-size: 16px;
`;

export const Descriptions = styled.div`
  margin-left: 10px;
  width: 350px;
`;

export const Title = styled.h3`
  font-size: 30px;
  text-align: center;
`;
export const Label = styled.span`
  font-weight: 700;
  font-size: 20px;
  margin-right: 5px;
  &.additional {
    border-bottom: 1px solid rgb(209, 208, 208);
    margin: 0;
    padding-top: 20px;
    padding-bottom: 10px;
  }
`;

export const NavMenu = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgb(204, 204, 204);
`;

// .link {
//   display: inline-block;
//   font-size: 20px;
//   font-weight: 700;
//   color: rgb(32, 31, 31);
//   width: 70px;
//   padding: 10px;
//   text-align: center;
//   &:not(:last-child) {
//     margin-right: 10px;
//   }
//   &:hover {
//     color: rgb(212, 38, 90);
//   }
// }
