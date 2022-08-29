import { css } from "styled-components";

export const mobile = (props) => {
  return css`


    @media only screen and (max-width: 600px) {
        ${props}
    }


  `;
};

export const tablet = (props) => {
  return css`


    @media (min-width: 600px) and (max-width: 1000px) {
        ${props}
    }


  `;
};
