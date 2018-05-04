import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import theme from './src/config/theme';
import App from './src/native/index';
import configureStore from './src/store';

if (typeof global.self === 'undefined') {
  global.self = global;
}

const Root = () => (
  <Provider store={configureStore}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
);

export default Root;
