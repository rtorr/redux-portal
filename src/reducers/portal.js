import { PORTAL_OPEN, PORTAL_CLOSE } from '../constants/ActionTypes';
import merge from 'amp-merge';

var initialState = {
  active: false
};

export default function portal(state = initialState, action) {
  switch (action.type) {
    case PORTAL_OPEN:
      return merge(state, {
        active: true
      });
    case PORTAL_CLOSE:
      return merge(state, {
        active: false
      });
    default:
      return state;
  }
}
