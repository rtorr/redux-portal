import PortalAppContainer from './containers/Root';
import PortalContainer from './containers/Portal';
import portalReducer from './reducers/portal';
import rootReducer from './reducers/index';

export default PortalAppContainer;

export {
  PortalContainer,
  portalReducer,
  rootReducer
};
