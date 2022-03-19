// import { createGlobalStyle } from "styled-components";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  --gray: #F4F4F4;
  --white: #FFFFFF;
  --black: #000000;
  --text-gray: #838383;
  --text-black: #000000;
  --text-white: #FFFFFF;
  --divider: #E6E8EC;

;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  @media (max-width: 1080px) {
    font-size: 93.75%; //15px
  }

  @media (max-width: 720) {
    font-size: 87.5%; //14px
  }
}

body {
  background: var(--gray);
  -webkit-font-smoothing: antialiased;
}



`