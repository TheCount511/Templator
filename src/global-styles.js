import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*, *:before, *:after {
    box-sizing: border-box;
  }
  html, body {
    padding:20px;
    height: 100%;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
    margin:0;
    color: #413d3d;
}`
