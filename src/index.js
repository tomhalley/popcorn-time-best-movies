import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import store from './common/store';
import GlobalStyle from './components/GlobalStyle';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>,
  window.document.getElementById('root'),
);
