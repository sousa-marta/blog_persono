import { createGlobalStyle } from 'styled-components';

import { colors } from './colors';

const GlobalStyle = createGlobalStyle`

  body {
    color: ${colors.lightGray} !important;
    background: ${colors.darkGray} !important;
  }

  h1, h2, h3, h4 {
    color: white;
  }

  .modal-content {
    background: ${colors.darkGray} !important;
    border-radius: 15px ;
  }
  .modal-header {
    border-bottom:none;
  }
  .modal-header .close {
    color: white !important;
    font-size: 1.5rem;
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