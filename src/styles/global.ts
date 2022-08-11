import {createGlobalStyle} from "styled-components"
import config from './config';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline-width: 2px;
    outline-color: ${config.color.secondary};
    /* outline: 0; */
  }
  html{
    font-size: 16px;
    width: 100%;
    min-height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    min-width: 320px;
    min-height: 100%;
    line-height: 1;
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1rem;
    overflow: auto;
    overflow-x: hidden;
    overflow-y: auto;
    overflow-scrolling: touch;
    overscroll-behavior-y: contain;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 1rem 0;
  }
  button {
    cursor: pointer;
  }
  #root{
    display: flex;
    margin: 0 auto;
    min-height: 100vh;
  }
  .App{
    display: flex;
    flex-direction: column;
    min-height: 100%;
    width: 100%;
    padding-top: 50px;/* floating header */
    @media only screen and (min-width: ${config.breakpoint.medium.min}) {
      min-height: 100vh;
    }
  }
`