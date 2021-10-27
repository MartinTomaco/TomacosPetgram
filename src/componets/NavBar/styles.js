import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fcfcfc;
  border-top: 1px solid #e0e0e0;
  z-index: 1;
`;

export const LinkStyled = styled(Link)`
  align-items: center;
  color: #888;
  display: inline-flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
`;
