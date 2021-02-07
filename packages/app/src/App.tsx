import React, { useState } from 'react';

import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { styleReset, List, ListItem, Divider } from 'react95';
// import original from 'react95/dist/themes/original';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AuthContext, LoginPage } from '@steakcoin/component-lib';

const GlobalStyles = createGlobalStyle`
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
      <Router>
        <Container>
          <GlobalStyles />
          <ThemeProvider theme={{}}>
            <AuthContext.Provider
              value={{
                isLoggedIn: isLoggedIn,
                token,
                login: login,
                logout: logout,
              }}
            >
              <List>
                <ListItem>🎤 ok... yayayaya works</ListItem>
                <ListItem>💃🏻 meow</ListItem>
                <Divider />
                <ListItem disabled>😴 Sleep</ListItem>
              </List>
            </AuthContext.Provider>
          </ThemeProvider>
        </Container>
      </Router>
    </div>
  );
}

export { App };
