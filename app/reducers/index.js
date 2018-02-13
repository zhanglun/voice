// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import home from './home';
import vols from './vols';
import player from './playList';

const rootReducer = combineReducers({
  counter,
  home,
  vols,
  player,
  router,
});

export default rootReducer;
