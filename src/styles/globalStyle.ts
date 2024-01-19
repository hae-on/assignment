import { createGlobalStyle } from 'styled-components';

import fonts from './font';

const GlobalStyle = createGlobalStyle`
${fonts}

#root {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  background: ${({ theme }) => theme.backgroundColors.light};
}

a {
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
  outline: none;
}

ol,
ul,
li {
  list-style: none;
}

input {
  border: 0;
  background-color: transparent;
}

button {
  color: initial;
  border: 0;
  background-color: transparent;
  cursor: pointer;
}
`;

export default GlobalStyle;
