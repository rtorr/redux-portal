import * as types from '../constants/ActionTypes';

export function open() {
  return { type: types.PORTAL_OPEN };
}

export function close() {
  return { type: types.PORTAL_CLOSE };
}
