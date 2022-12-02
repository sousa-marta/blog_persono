import { createGlobalStyle } from 'styled-components';

import { colors } from './colors';

import LatoRegularWoff2 from '../assets/fonts/Lato-Regular.woff2';
import LatoRegularWoff from '../assets/fonts/Lato-Regular.woff';
import LatoRegularTTf from '../assets/fonts/Lato-Regular.ttf';

import LatoSemiBoldTTf from '../assets/fonts/Lato-Bold.ttf';

import LatoBoldTTf from '../assets/fonts/Lato-Bold.ttf';

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: Lato;
    font-style: normal;
    font-weight: 400;
    src: url(${LatoRegularWoff2}),
      url(${LatoRegularWoff}),
      url(${LatoRegularTTf})
  }
  
  @font-face {
    font-family: LatoSemiBold;
    src: url(${LatoBoldTTf})
  }

  @font-face {
    font-family: LatoBold;
    src: url(${LatoBoldTTf})
  }

 

  body {
    color: ${colors.lightGray} !important;
    background: ${colors.darkGray} !important;
    font-family: 'Lato', Arial, sans-serif;
  }

  h1, h2, h3, h4 {
    color: white;
    font-family: 'LatoSemiBold', Arial, sans-serif;
  }

  .modal-content {
    background: ${colors.darkGray} !important;
    border-radius: 15px ;
  }
  .modal-header {
    border-bottom:none;
  }
  .modal-header .close {
    display: flex;
    align-items: center;
    color: white !important;
    font-size: 1rem;
    &:hover {
      color: ${colors.lightGray} !important;
      cursor: pointer;
    }
  }
  .modal-body {
    padding-top: 0;
    padding-bottom: 0;
  }
  .modal-body input {
    color: ${colors.darkestGray} ;
  }
  .modal-body label {
    color: ${colors.gray} !important;
  }
  .modal-body textarea {
    height: 100px !important;
  }



  @media (min-width: 768px) {
    .modal-content {
      padding: 0.5rem 1rem;
    }
  }


`;

export default GlobalStyle;