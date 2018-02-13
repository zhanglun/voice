import { ADD_TRACK, REMOVE_TRACK, REMOVE_TRACK_ALL, PLAY_CONTROL } from '../actions/playList';

const initialState = {
  playList: [],
};

export default function player(state = initialState, action) {
  switch (action.type) {
    case ADD_TRACK:
      // TODO: 添加到列表的头部
      return { ...state };
    case REMOVE_TRACK:
      return { ...state };
    case PLAY_CONTROL:
      return { ...state };
    case REMOVE_TRACK_ALL:
      return { ...state };
    default:
      return { ...state };
  }
}
