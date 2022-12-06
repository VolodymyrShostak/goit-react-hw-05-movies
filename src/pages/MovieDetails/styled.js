import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BackToButton = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 145px;
  height: 40px;
  margin: 0;
  text-decoration: none;
`;

export const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  align-items: flex-end;
  border-bottom: 2px solid #ccc;
`;

export const Poster = styled.img`
  height: 350px;
  margin-left: 20px;
`;

export const Description = styled.div`
  margin-left: 20px;
  font-weight: 400;
  color: black;
`;

export const Text = styled.span`
  color: blue;
`;

export const Title = styled.h1`
  color: brown;
`;
export const WrapperLink = styled.ul`
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid #ccc;
  gap: 5px;
`;
export const Title2 = styled.h5`
  margin-left: 40px;
  margin-bottom: 0;
  margin-top: 15px;
`; // export const IconBack = styled(BiArrowBack)`
//   width: 32px;
//   height: 32px;
//   fill: white;
//   transition: fill 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
//   &:hover {
//     fill: orange;
//   }
// `;
