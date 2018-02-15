// @flow
export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
export const TOGGLE_PLAYLIST = 'TOGGLE_PLAYLIST';
export const PLAY_TRACK = 'PLAY_TRACK';

export function toggle(status) {
  return {
    type: TOGGLE_SIDEBAR,
    payload: {
      status: !status,
    }
  };
}

export function playlist(status) {
  return {
    type: TOGGLE_PLAYLIST,
    payload: {
      status: !status,
    }
  };
}


/* dispatch */

export function toggleSidebar() {
  return (dispatch, getState) => {
    const { home } = getState();
    const { sidebarStatus } = home;

    dispatch(toggle(sidebarStatus));
  };
}

export function togglePlayList() {
  return (dispatch, getState) => {
    const { home } = getState();
    const { playListStatus } = home;

    dispatch(playlist(playListStatus));
  };
}

/**
 * 播放|暂停 播放
 * @returns {function(*, *)}
 */
export function play() {
  return (dispatch, getState) => {
    const { home, player } = getState();
    const { playList } = player;
    const { currentTrack, playStatus } = home;

    dispatch({
      type: PLAY_TRACK,
      payload: {
        playStatus: !playStatus,
        currentTrack: currentTrack.url ? currentTrack : playList[0],
      }
    });
  };
}
