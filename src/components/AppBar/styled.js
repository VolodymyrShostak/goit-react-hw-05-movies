import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavWrapper = styled.div`
  display: flex;
  padding: 10px;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;
export const NavItem = styled(NavLink)`
  display:flex;
  align-items:center;
  font-weight:bold;
  margin-left: 30px;
  color:black;
  text-decoration:none;
  font-size:20px;

  &.active {
    color:orange;
    
  }

  :hover:not(.active),
  :focus:not(.active) {
    color:blue;}



`