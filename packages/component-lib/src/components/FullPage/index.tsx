import React from 'react';
import styled from 'styled-components';

interface props {
  otherProps?: any;
  children?: any;
}

const MainContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export const FullPage = ({ children, otherProps }: props) => {
  return <MainContainer {...otherProps}>{children}</MainContainer>;
};
