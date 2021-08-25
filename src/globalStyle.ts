import { createGlobalStyle } from 'styled-components';
import theme from './theme'

const GlobalStyle = createGlobalStyle`
  html {
    background-color: ${theme.backgroundColor} ;
  }
`;

export default GlobalStyle;