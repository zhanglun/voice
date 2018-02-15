// @flow
export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
export const TOGGLE_PLAYLIST = 'TOGGLE_PLAYLIST';
export const PLAY_TRACK = 'PLAY_TRACK';
export const PLAY_PREVIOUS = 'PLAY_PREVIOUS';
export const PLAY_NEXT = 'PLAY_NEXT';


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


export function onPrevious() {
  return (dispatch, getState) => {
    const { home, player } = getState();
    const { playList } = player;
    const { currentTrack } = home;

    let index = 0;

    // TODO: 支持随机播放

    playList.forEach((track, i) => {
      if (track.track_id === currentTrack.track_id) {
        index = i - 1;
      }
    });

    index = index < 0 ? playList.length - 1 : index;

    dispatch({
      type: PLAY_PREVIOUS,
      payload: {
        playStatus: true,
        currentTrack: playList[index] || {}
      }
    });
  };
}

export function onNext() {
  return (dispatch, getState) => {
    const { home, player } = getState();
    const { playList } = player;
    const { currentTrack } = home;

    let index = 0;

    // TODO: 支持随机播放

    playList.forEach((track, i) => {
      if (track.track_id === currentTrack.track_id) {
        index = i + 1;
      }
    });

    index = index > playList.length - 1 ? 0 : index;

    dispatch({
      type: PLAY_NEXT,
      payload: {
        playStatus: true,
        currentTrack: playList[index] || {}
      }
    });
  };
}

