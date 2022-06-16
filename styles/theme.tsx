import React, { ReactElement, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import theme from "../theme/default";
import GlobalStyles from './global';

type ThemeProps = {
    children: React.ReactNode;
};

const Theme: React.FC<ThemeProps> = ({children}) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;