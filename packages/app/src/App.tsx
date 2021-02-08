import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import { styleReset } from 'react95';
import original from 'react95/dist/themes/original';
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';

import { useGet } from 'restful-react';

import { AuthContext, LoginPage, ProfilePage } from '@steakcoin/component-lib';

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  html {
    height: 100%;
    width: 100%;
  }
  body {
    height: 100%;
    width: 100%;
  }
  #app {
    height: 100%;
    width: 100%;
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: teal;
`;

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('');

  const login = () => {
    window.open('/api/v1/auth/twitter', '_self');
  };

  const logout = () => {
    window.open('/api/v1/auth/logout', '_self');
    setToken('');
  };

  const { data: userProfile, loading, error } = useGet(
    '/api/v1/auth/login/success'
  );

  console.log(userProfile);

  return (
    <Container>
      <Router>
        <GlobalStyles />
        <ThemeProvider theme={original}>
          <AuthContext.Provider
            value={{
              isLoggedIn: isLoggedIn,
              token,
              login: login,
              logout: logout,
            }}
          >
            {isLoggedIn ? <ProfilePage /> : <LoginPage />}
          </AuthContext.Provider>
        </ThemeProvider>
      </Router>
    </Container>
  );
}

export { App };
