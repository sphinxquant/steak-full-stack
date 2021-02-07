import * as React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import { App } from '@steakcoin/app';

const SApp = styled(App)`
  height: 100%;
  width: 100%;
`;

ReactDOM.render(
  <React.Fragment>
    <SApp />
  </React.Fragment>,
  document.getElementById('app')
);
