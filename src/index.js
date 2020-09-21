import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import theme from './theme';
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducer'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </ThemeProvider>,
  document.querySelector('#root'),
);
