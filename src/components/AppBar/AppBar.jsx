import React from 'react';

import { NavWrapper, NavItem } from './styled';

export const AppBar = () => {
    return (
      <NavWrapper>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/movies">Movies</NavItem>
      </NavWrapper>
    );
}
