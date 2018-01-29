/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import VolsPage from './containers/VolsPage';

export default () => (
  <App>
    <HomePage>
      <Switch>
        <Route path="/" component={VolsPage} />
      </Switch>
    </HomePage>
  </App>
);
