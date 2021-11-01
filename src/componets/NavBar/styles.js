import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
//El NavLink es como el Link pero si incluye el atributo aria-current
import { fadeIn } from '../../styles/animation';

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

export const LinkStyled = styled(NavLink)`
  align-items: center;
  color: #888;
  display: inline-flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  &[aria-current] {
    color: #000;
    &:after {
      ${fadeIn({ time: '0.5s' })};
      content: '·';
      font-weight: bold;
      position: absolute;
      bottom: 0;
      font-size: 34px;
      line-height: 20px;
    }
  }
`;
