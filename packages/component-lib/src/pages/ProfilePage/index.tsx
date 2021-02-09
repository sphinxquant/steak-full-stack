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
  Anchor,
} from 'react95';
import { FullPage } from '../../components';
import { AuthContext } from '../../contexts/AuthContext';

import { useGet } from 'restful-react';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  padding: 0 10px;
  max-width: 720px;
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

const WrapperTop = styled(Wrapper)`
  align-items: flex-end;
  padding-bottom: 15px;
`;

const WrapperBottom = styled(Wrapper)`
  align-items: flex-start;
  padding-top: 15px;
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
      <WrapperTop>
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
              <p>Account ID:</p>
              <WindowContent>
                {success?.user?.hederaId ? (
                  <p>{success?.user?.hederaId}</p>
                ) : (
                  <p>
                    Want to collect SteakCoin? Getting started is easy! Just
                    Tweet at
                    <Anchor
                      href="https://twitter.com/steakcoin"
                      target="_blank"
                    >
                      {' '}
                      @Steakcoin
                    </Anchor>
                  </p>
                )}
              </WindowContent>
              {success?.user?.special && (
                <>
                  <p>Private Key:</p>
                  <Special variant="well" className="footer">
                    <p>{success?.user?.special}</p>
                  </Special>
                </>
              )}
            </>
          )}
        </Window>
      </WrapperTop>

      <WrapperBottom>
        <Window className="window">
          <WindowHeader className="window-header">
            <span>MyHBarWallet.exe</span>
            <Button>
              <span className="close-icon" />
            </Button>
          </WindowHeader>
          {loading ? (
            <LoadingIndicator isLoading={loading} />
          ) : (
            <>
              <p>How do I access my account?</p>
              <WindowContent>
                {success?.user?.hederaId ? (
                  <p>{success?.user?.hederaId}</p>
                ) : (
                  <>
                    <p>
                      It's Easy! Just go to
                      <Anchor
                        href="https://myhbarwallet.com/access-my-account"
                        target="_blank"
                      >
                        {' '}
                        https://myhbarwallet.com/access-my-account
                      </Anchor>
                    </p>
                    <p>
                      Click on "Software" {'->'} "Private Key" {'->'} Click
                      Continue
                    </p>
                    <p>Copy in your private key. {'->'} Click Continue </p>
                    <p>Type in your Account ID. {'->'} Click Continue </p>
                    <p>TADA! Your wallet is setup.</p>
                  </>
                )}
              </WindowContent>
              {success?.user?.special && (
                <>
                  <p>Private Key:</p>
                  <Special variant="well" className="footer">
                    <p>{success?.user?.special}</p>
                  </Special>
                </>
              )}
            </>
          )}
        </Window>
      </WrapperBottom>
    </FullPage>
  );
};
