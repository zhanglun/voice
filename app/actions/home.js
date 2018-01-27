// @flow
import type { homeStateType, actionType } from '../reducers/home';

export const OPEN_SIDEBAR = 'OPEN_SIDEBAR';
export const CLOSE_SIDEBAR = 'CLOSE_SIDEBAR';

export function openSidebar() {
  return {
    type: OPEN_SIDEBAR,
    payload: {

    }
  };
}

export function closeSidebar() {
  return {
    type: CLOSE_SIDEBAR,
    payload: {

    }
  };
}

export function toggleSidebar() {
  return (dispatch: (action: actionType) => void, getState: () => homeStateType) => {
    const { home } = getState();
    const { sidebarStatus } = home;

    console.log('toggleSidebar', home);

    dispatch(sidebarStatus ? closeSidebar() : openSidebar());
  };
}

