/* eslint 'global-require': 0 */
/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { SSR } from 'config';

const render = () => {
  const Root = require('./app/Root').default;
  ReactDOM[SSR && !__DEV__ ? 'hydrate' : 'render'](<Root />, document.getElementById('app'));
};

if (__DEV__ && module.hot) {
  module.hot.accept('./app/Root', render);
}

render();
