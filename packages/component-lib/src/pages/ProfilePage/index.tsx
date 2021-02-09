import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import {
  Window,
  WindowContent,
  WindowHeader,
  Button,
  Toolbar,
  Panel,
  LoadingIndicator,
} from 'react95';
import { FullPage } from '../../components';
import { AuthContext } from '../../contexts/AuthContext';

import { useGet } from 'restful-react';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  padding: 0 10px;
  justify-content: center;
  align-items: center;
  background: teal;
  .window-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .close-icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-left: -1px;
    margin-top: -1px;
    transform: rotateZ(45deg);
    position: relative;
    &:before,
    &:after {
      content: '';
      position: absolute;
      background: ___CSS_0___;
    }
    &:before {
      height: 100%;
      width: 3px;
      left: 50%;
      transform: translateX(-50%);
    }
    &:after {
      height: 3px;
      width: 100%;
      left: 0px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .window {
    min-height: 200px;
    width: 100%;
  }
  .window:nth-child(2) {
    margin: 2rem;
  }
  .footer {
    display: block;
    margin: 0.25rem;
    height: 31px;
    line-height: 31px;
    padding-left: 0.25rem;
  }
`;

const Special = styled(Panel)`
  overflow: scroll;
`;

export const ProfilePage = ({}) => {
  const auth = useContext(AuthContext);

  const handleSignInClick = () => {
    auth.login();
  };

  const handleLogoutClick = () => {
    auth.logout();
  };

  const { data: success, loading, error } = useGet('/api/v1/user/hedera');

  return (
    <FullPage logout={handleLogoutClick}>
      <Wrapper>
        <Window className="window">
          <WindowHeader className="window-header">
            <span>SteakCoin.exe</span>
            <Button>
              <span className="close-icon" />
            </Button>
          </WindowHeader>
          {loading ? (
            <LoadingIndicator isLoading={loading} />
          ) : (
            <>
              <WindowContent>
                <p>{success?.user?.hederaId}</p>
              </WindowContent>
              <Special variant="well" className="footer">
                <p>{success?.user?.special}</p>
              </Special>
            </>
          )}
        </Window>
      </Wrapper>
    </FullPage>
  );
};
