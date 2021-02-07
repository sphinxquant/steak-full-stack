import React, { useState } from 'react';

import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AuthContext, LoginPage } from '@steakcoin/component-lib';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'ms_sans_serif';
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
`;

const Container = styled.div`
  padding: 40px;
`;

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('');

  const login = () => {
    setIsLoggedIn(true);
    setToken('brrrr');
  };

  const logout = () => {
    setIsLoggedIn(false);
    setToken('');
  };

  return (
    <div>
      <body>
        <Router>
          <Container>
            <GlobalStyle />
            <ThemeProvider theme={{}}>
              <AuthContext.Provider
                value={{
                  isLoggedIn: isLoggedIn,
                  token,
                  login: login,
                  logout: logout,
                }}
              >
                <Route path="/">
                  <LoginPage />
                </Route>
              </AuthContext.Provider>
            </ThemeProvider>
          </Container>
        </Router>
      </body>
    </div>
  );
}

export { App };
