import React, { useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext';
import { FullPage } from '../../components/FullPage';

export const LoginPage = ({}) => {
  const auth = useContext(AuthContext);

  const handleSignInClick = () => {
    auth.login();
  };

  const handleLogoutClick = () => {
    auth.logout();
  };

  return (
    <FullPage>
      <ul>
        <li>{/* <Link to="/">Home</Link> */}</li>
        {auth.isLoggedIn ? (
          <li onClick={handleLogoutClick}>Logout</li>
        ) : (
          <li onClick={handleSignInClick}>Login</li>
        )}
      </ul>
    </FullPage>
  );
};
