import React from 'react';
import { Nav, LinkStyled } from './styles';
import { MdHome, MdFavorite, MdPerson } from 'react-icons/md';

const SIZE = '32px';

export const NavBar = () => {
  return (
    <Nav>
      <LinkStyled to="/">
        <MdHome size={SIZE} />
      </LinkStyled>
      <LinkStyled to="/favs">
        <MdFavorite size={SIZE} />
      </LinkStyled>
      <LinkStyled to="/user">
        <MdPerson size={SIZE} />
      </LinkStyled>
    </Nav>
  );
};
