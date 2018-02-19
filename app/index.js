import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import axios from 'axios';
import Root from './containers/Root';
import { configureStore, history } from './store/configureStore';
import './app.global.css';

window.axiosInstance = axios.create({
  baseURL: 'http://198.13.46.251:9527/api/',
});

const store = configureStore();

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NextRoot = require('./containers/Root'); // eslint-disable-line global-require
    render(
      <AppContainer>
        <NextRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
