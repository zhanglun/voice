// @flow
import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from '../actions/home';

export type homeStateType = {
  +home: object
};

export type actionType = {
  +type: string
};

const initialState = {
  sidebarStatus: false,
};

export default function home(state: object = initialState, action: actionType) {
  switch (action.type) {
    case OPEN_SIDEBAR:
      return { ...state, sidebarStatus: true };
    case CLOSE_SIDEBAR:
      return { ...state, sidebarStatus: false };
    default: return state;
  }
}
