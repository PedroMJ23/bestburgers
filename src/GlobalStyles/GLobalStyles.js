import { createGlobalStyle } from "styled-components";


const GlobalStylesCss =     createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  text-decoration-style: none;
    scroll-behavior: smooth;
  
}
body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  //background-color: #121314;
  background-color: #6687A9;
  text-decoration: none;
  list-style: none;

}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
.textCenter{
  text-align: center;
}
.img_menu{
  display: none;
  @media only screen and (max-width: 767px) {
    display: flex;
    margin: 5px;
    height: 25px;
    width: 25px;
    cursor: pointer;
  }
}


`

export default GlobalStylesCss;