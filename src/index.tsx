import * as React from 'react';
import * as ReactDOM from 'react-dom';
import GlobalStyle from 'assets/styles/globalStyle';
import { theme } from 'assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import App from './App';

ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </>,
  document.getElementById('root'),
);
