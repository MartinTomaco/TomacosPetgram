import { keyframes, css } from 'styled-components';

const fadeInKeyframes = keyframes`
from{
 filter: blur(5px);
 opacity: 0;
}
to{
 filter: blur(0);
 opacity: 1;
}
`;
export const fadeIn = ({ time = '1s', type = 'ease' } = {}) => {
  return css`
    animation: ${time} ${fadeInKeyframes} ${type};
  `;
};

const bounceDownKeyFrames = keyframes`
  0% {
    top: -60px
  }
  40%{
    top: 10px
  }
  100% {
    top: -20px
  }
`;

export const bounceDown = ({ time = '1s', type = 'ease' } = {}) => {
  return css`
    animation: ${time} ${bounceDownKeyFrames} ${type};
  `;
};
