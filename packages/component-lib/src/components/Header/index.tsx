import { Link } from 'react-router-dom';
import React, { useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext';

export const Header = ({}) => {
  const auth: any = useContext(AuthContext);

  const handleSignInClick = () => {
    auth.login();
  };

  const handleLogoutClick = () => {
    auth.logout();
  };

  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      {auth.isLoggedIn ? (
        <li onClick={handleLogoutClick}>Logout</li>
      ) : (
        <li onClick={handleSignInClick}>Login</li>
      )}
    </ul>
  );
};
