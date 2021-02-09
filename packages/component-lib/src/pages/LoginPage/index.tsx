import React, { useContext } from 'react';
import styled from 'styled-components';
import {
  Window,
  WindowContent,
  WindowHeader,
  Button,
  Toolbar,
  Panel,
  Anchor,
} from 'react95';
import { AuthContext } from '../../contexts/AuthContext';

import { Logo } from './logo512';

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

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoginPage = ({}) => {
  const auth = useContext(AuthContext);

  const handleSignInClick = () => {
    auth.login();
  };

  return (
    <Wrapper>
      <Window className="window">
        <WindowHeader className="window-header">
          <span>SteakCoin.exe</span>
          <Button>
            <span className="close-icon" />
          </Button>
        </WindowHeader>
        <WindowContent>
          <LogoWrapper>
            <Logo />
            <TextWrapper>
              <p>SteakCoin! We are the people's coin.</p>
              <p>
                Want to invest in SteakCoin? Getting started is easy! Just Tweet
                at
                <Anchor href="https://twitter.com/steakcoin" target="_blank">
                  {' '}
                  @Steakcoin
                </Anchor>
              </p>
            </TextWrapper>
          </LogoWrapper>
        </WindowContent>
        <Panel variant="well" className="footer">
          Claim your SteakCoin filled wallet now!
        </Panel>
        <Button fullWidth onClick={handleSignInClick}>
          Login Using Twitter
        </Button>
      </Window>
    </Wrapper>
  );
};
