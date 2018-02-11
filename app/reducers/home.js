// @flow
import { TOGGLE_SIDEBAR } from '../actions/home';

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
    case TOGGLE_SIDEBAR:
      return { ...state, sidebarStatus: action.payload.status };
    default: return state;
  }
}
