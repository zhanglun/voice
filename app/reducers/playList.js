import { ADD_TRACK, REMOVE_TRACK, REMOVE_TRACK_ALL, PLAY_CONTROL } from '../actions/player';

export default function player(state, action) {
  switch (action.type) {
    case ADD_TRACK:
      // TODO: 添加到列表的头部
      return state.list;
    case REMOVE_TRACK:
      return state.list;
    case PLAY_CONTROL:
      return state.list;
    case REMOVE_TRACK_ALL:
      return state.list;
    default:
      return state.list;
  }
}
