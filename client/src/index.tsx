import * as React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import ReactGA from 'react-ga';

import { App } from '@steakcoin/app';

const GaApp = () => {
  ReactGA.initialize('UA-189301059-1', { debug: true });

  return <App />;
};

const SApp = styled(GaApp)`
  height: 100%;
  width: 100%;
`;

ReactDOM.render(
  <React.Fragment>
    <SApp />
  </React.Fragment>,
  document.getElementById('app')
);
