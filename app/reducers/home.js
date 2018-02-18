// @flow
import { TOGGLE_SIDEBAR, TOGGLE_PLAYLIST, PLAY_TRACK, PLAY_PREVIOUS, PLAY_NEXT, ADD_TRACK, ADD_TRACK_AND_PLAY, REMOVE_TRACK, REMOVE_TRACK_ALL } from '../actions/home';

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
  playList: [],
};

export default function home(state: object = initialState, action: actionType) {
  const { type, payload } = action;
  const result = [];
  let index = null;

  switch (type) {
    case TOGGLE_SIDEBAR:
      return { ...state, sidebarStatus: payload.status };
    case TOGGLE_PLAYLIST:
      return { ...state, playListStatus: payload.status };
    case ADD_TRACK:
      index = state.playList.length;

      state.playList.forEach((item, i) => {
        if (payload.track && item.track_id === payload.track.track_id) {
          index = i;
        } else {
          result.push(item);
        }
      });

      // state.playList = state.playList.slice(0, index).concat(state.playList.slice(index + 1));
      result.push(payload.track);

      return { ...state, playList: result };
    case ADD_TRACK_AND_PLAY:
      state.playList.forEach((item) => {
        if (!(payload.track && item.track_id === payload.track.track_id)) {
          result.push(item);
        }
      });

      result.unshift(payload.track);

      return { ...state, playList: result, currentTrack: payload.track };
    case REMOVE_TRACK:
      return { ...state };
    case REMOVE_TRACK_ALL:
      return { ...state };

    case PLAY_TRACK:
      return { ...state, ...payload };
    case PLAY_PREVIOUS:
      return { ...state, ...payload };
    case PLAY_NEXT:
      return { ...state, ...payload };
    default: return state;
  }
}
