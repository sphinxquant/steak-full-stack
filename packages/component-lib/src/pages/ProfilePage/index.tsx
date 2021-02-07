import React, { useContext } from 'react';
import styled from 'styled-components';
import {
  Window,
  WindowContent,
  WindowHeader,
  Button,
  Toolbar,
  Panel,
} from 'react95';
import { FullPage } from '../../components';
import { AuthContext } from '../../contexts/AuthContext';

export const ProfilePage = ({}) => {
  const auth = useContext(AuthContext);

  const handleSignInClick = () => {
    auth.login();
  };

  const handleLogoutClick = () => {
    auth.logout();
  };

  return <FullPage logout={handleLogoutClick}></FullPage>;
};
