// @flow
import { TOGGLE_SIDEBAR, TOGGLE_PLAYLIST, PLAY_TRACK } from '../actions/home';

export type actionType = {
  +type: string
};

const initialState = {
  sidebarStatus: false,
  playListStatus: false,
  currentTrack: {},
  currentTime: 0,
  currentTotalTime: 0,
  playStatus: false,
};

export default function home(state: object = initialState, action: actionType) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { ...state, sidebarStatus: action.payload.status };
    case TOGGLE_PLAYLIST:
      return { ...state, playListStatus: action.payload.status };
    case PLAY_TRACK:
      return { ...state, ...action.payload };
    default: return state;
  }
}
