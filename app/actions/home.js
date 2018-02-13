// @flow
export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
export const TOGGLE_PLAYLIST = 'TOGGLE_PLAYLIST';

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
