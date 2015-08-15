import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Portal from '../components/Portal';
import * as Actions from '../actions/Actions';

function mapStateToProps(state) {
  return {
    portal: state.portal
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Portal);
