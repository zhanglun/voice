// @flow
import type { homeStateType, actionType } from '../reducers/home';

export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
export const TOOGLE_PLAYLIST = 'TOOGLE_PLAYLIST';

export function toggle(status) {
  return {
    type: TOGGLE_SIDEBAR,
    payload: {
      status: !status,
    }
  };
}

export function toggleSidebar() {
  return (dispatch: (action: actionType) => void, getState: () => homeStateType) => {
    const { home } = getState();
    const { sidebarStatus } = home;

    dispatch(toggle(sidebarStatus));
  };
}

