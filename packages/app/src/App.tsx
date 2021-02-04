import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { HelloWorld } from '@steakcoin/component-lib';

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    min-height: 100%;
  }
`;

const Container = styled.div`
  padding: 40px;
`;

function App() {
  console.log(HelloWorld);
  return (
    <div className="App">
      <body className="App-header">
        <Container>
          <GlobalStyle />
          <p>Hello hello</p>
          <HelloWorld />
        </Container>
      </body>
    </div>
  );
}

export { App };
