import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
// import { BiArrowBack } from 'react-icons/bi';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
    width: 100%;
 
`;

export const Wrapper = styled.div`
  padding:20px;
  display: flex;
  align-items: flex-end;
  background: rgba(100, 100, 100, 0.15);
 
`;

export const WrapperBtn = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: flex-end;
`;

export const WrapperOutlet = styled.div`
  /* padding-top: 25px; */
  padding-right: 25px;
  /* padding-bottom: 25px; */
  display: flex;
  align-items: flex-end;
  background: rgba(176, 130, 171, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const Image = styled.img`
  height: 300px;
  margin-left: 20px;
`;

export const Desc = styled.div`
  margin-left: 20px;
  font-weight: 400;
  color: black;
`;

export const TextWrap = styled.span`
  color: blue;
`;

export const Title = styled.h1`
  color: brown;
`;

export const BackBtn = styled(NavLink)`
  transform: scale(1);
  transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  background: rgba(248, 246, 248, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  border-radius: 5px;
  width: 45px;
  height: 45px;
  margin: 20px 20px 20px 0;
  text-decoration: none;
  transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: scale(1.05);
  }
`;

// export const IconBack = styled(BiArrowBack)`
//   width: 32px;
//   height: 32px;
//   fill: white;
//   transition: fill 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
//   &:hover {
//     fill: orange;
//   }
// `;
