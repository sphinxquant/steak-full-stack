import React, { useState } from 'react';
import styled from 'styled-components';

import {
  AppBar,
  Toolbar,
  TextField,
  Button,
  List,
  ListItem,
  Divider,
  Window,
} from 'react95';

interface props {
  otherProps?: any;
  children?: any;
  logout?: any;
}

const MainContainer = styled.div`
  height: 100%;
  min-height: 620px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FullPage = ({ children, otherProps, logout }: props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <AppBar>
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <Button
              onClick={() => setOpen(!open)}
              active={open}
              style={{ fontWeight: 'bold' }}
            >
              Start
            </Button>
            {open && (
              <List
                style={{
                  position: 'absolute',
                  left: '0',
                  top: '100%',
                }}
                onClick={() => setOpen(false)}
              >
                <ListItem disabled>
                  <span role="img" aria-label="👨‍💻">
                    👨‍💻
                  </span>
                  Profile
                </ListItem>
                <ListItem disabled>
                  <span role="img" aria-label="📁">
                    📁
                  </span>
                  My account
                </ListItem>
                <Divider />
                <ListItem onClick={logout}>
                  <span role="img" aria-label="🔙">
                    🔙
                  </span>
                  Logout
                </ListItem>
              </List>
            )}
          </div>
        </Toolbar>
      </AppBar>
      <MainContainer {...otherProps}>{children}</MainContainer>
    </>
  );
};
