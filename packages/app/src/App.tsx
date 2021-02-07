import React, { useState } from 'react';

import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import { styleReset, List, ListItem, Divider } from 'react95';
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';
import original from 'react95/dist/themes/original';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AuthContext, LoginPage } from '@steakcoin/component-lib';

const GlobalStyle = createGlobalStyle`
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
  ${styleReset}
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
            <ThemeProvider theme={original}>
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
                  <List>
                    <ListItem>🎤 Sing</ListItem>
                    <ListItem>💃🏻 Dance</ListItem>
                    <Divider />
                    <ListItem disabled>😴 Sleep</ListItem>
                  </List>
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

// import React, { useState } from 'react';

// import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

// import { styleReset, List, ListItem, Divider } from 'react95';
// import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
// import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';
// import original from 'react95/dist/themes/original';

// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Contexts, Pages } from '@steakcoin/component-lib';

// const GlobalStyle = createGlobalStyle`
//   @font-face {
//     font-family: 'ms_sans_serif';
//     src: url('${ms_sans_serif}') format('woff2');
//     font-weight: 400;
//     font-style: normal
//   }
//   @font-face {
//     font-family: 'ms_sans_serif';
//     src: url('${ms_sans_serif_bold}') format('woff2');
//     font-weight: bold;
//     font-style: normal
//   }
//   body {
//     font-family: 'ms_sans_serif';
//   }
//   ${styleReset}
// `;

// const Container = styled.div`
//   padding: 40px;
// `;

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [token, setToken] = useState('');

//   const login = () => {
//     setIsLoggedIn(true);
//     setToken('brrrr');
//   };

//   const logout = () => {
//     setIsLoggedIn(false);
//     setToken('');
//   };

//   return (
//     <div>
//       <body>
//         <Router>
//           <Container>
//             <GlobalStyle />
//             <ThemeProvider theme={original}>
//               <Contexts.AuthContext.Provider
//                 value={{
//                   isLoggedIn: isLoggedIn,
//                   token,
//                   login: login,
//                   logout: logout,
//                 }}
//               >
//                 <Route path="/">
//                   <Pages.LoginPage />
//                 </Route>
//               </Contexts.AuthContext.Provider>
//             </ThemeProvider>
//           </Container>
//         </Router>
//       </body>
//     </div>
//   );
// }

// export { App };
