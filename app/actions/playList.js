
export const ADD_TRACK = 'ADD_TRACK';
export const REMOVE_TRACK = 'REMOVE_TRACK';
export const REMOVE_TRACK_ALL = 'REMOVE_TRACK_ALL';
export const PLAY_CONTROL = 'PLAY_CONTROL';

export function addTrack(track) {
  return {
    type: ADD_TRACK,
    payload: {
      track,
    },
  };
}

export function removeTrack(track, index) {
  return {
    type: REMOVE_TRACK,
    payload: {
      track,
      index,
    },
  };
}

export function removeTrackALL() {
  return {
    type: REMOVE_TRACK_ALL,
    payload: {
    },
  };
}

export function playCpntrol() {
  return {

  };
}
