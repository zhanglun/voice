// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import home from './home';
import vols from './vols';

const rootReducer = combineReducers({
  counter,
  home,
  vols,
  router,
});

export default rootReducer;
