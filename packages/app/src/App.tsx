import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { Contexts, Pages } from '@steakcoin/component-lib';

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <body className="App-header">
        <Container>
          <GlobalStyle />
          <Contexts.AuthContext.Provider
            value={{
              isLoggedIn: isLoggedIn,
              login: login,
              logout: logout,
            }}
          >
            <Pages.LoginPage />
          </Contexts.AuthContext.Provider>
        </Container>
      </body>
    </div>
  );
}

export { App };
