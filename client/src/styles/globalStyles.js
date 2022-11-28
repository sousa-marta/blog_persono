import { createGlobalStyle } from 'styled-components';

import { colors } from './colors';

const GlobalStyle = createGlobalStyle`

  body {
    color: ${colors.lightGray} !important;
    background: ${colors.darkGray} !important;
  }

  h1 {
    color: white;
  }


`;

export default GlobalStyle;