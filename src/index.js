import React from 'react';
import ReactDOM from 'react-dom';

import { createTheme, ThemeProvider } from '@material-ui/core';

import { Provider } from 'react-redux';
import { store } from './redux/store';

import App from './App';

const theme = createTheme();

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
