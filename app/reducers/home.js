// @flow
import { TOGGLE_SIDEBAR, TOGGLE_PLAYLIST } from '../actions/home';

export type actionType = {
  +type: string
};

const initialState = {
  sidebarStatus: false,
  playListStatus: false,
  playList: [],

};

export default function home(state: object = initialState, action: actionType) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { ...state, sidebarStatus: action.payload.status };
    case TOGGLE_PLAYLIST:
      return { ...state, playListStatus: action.payload.status};
    default: return state;
  }
}
