import React, { ConcurrentMode } from "react";
import { createRoot } from "react-dom";
import App from "./App";
import { normalize } from "polished";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${normalize()}

  html {
    font-family: sans-serif;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;

createRoot(document.getElementById("root")).render(
  <>
    <GlobalStyle />
    <ConcurrentMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConcurrentMode>
  </>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
