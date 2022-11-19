import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, :root {
    min-height: 100%;
  }
  
  body {
    display: flex;
    justify-content: center;
    background: linear-gradient(180deg, rgb(60 27 122) 0%, rgb(0 0 0) 100%);
  }  
`;
