import styled, { css } from "styled-components";
import { bounceDown } from "../../styles/animation";

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }

  padding-inline-start: 0;
  margin-bottom: 10px;

  ${props => props.fixed && css`
    {
    position: fixed;
    top: -20px;
    right:0;
    left: 0;
    margin: 0 auto;
    padding: 5px;
    max-width: 400px;
    border-radius: 60px;
    background: #fff;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    transform: scale(.6);
    z-index: 1;
    ${bounceDown({time:'1s'})}
    }
  `}
 
`

export const Item = styled.li`
padding: 0 8px;
`