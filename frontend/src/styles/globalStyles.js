import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #D2D2D2;
    font-family: 'Poppins', sans-serif;
    font-size: 62.5%;

    h1, h2, h3, h4, h5, p {
      margin: 0;
    }

    a {
      text-decoration: none;
    }

    ul {
      list-style: none;
    }
  }
`;

export default GlobalStyle;
