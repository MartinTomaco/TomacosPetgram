import styled from "styled-components";
import { fadeIn } from '../../styles/animation.js'
import { MdFavorite } from 'react-icons/md';

export const LikeIcon = styled(MdFavorite)`
  color:  #222;
  ${fadeIn({ time: '250ms', type: 'ease-in' })}
`
export const Button = styled.button`
display: flex;
align-items: center;
padding-top: 8px;
& svg {
 margin: 4px;
}
`