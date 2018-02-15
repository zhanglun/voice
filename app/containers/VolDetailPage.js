import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import VolDetail from '../components/VolDetail';
import * as HomeActions from '../actions/home';

function mapStateToProps(state) {
  return {
    ...state,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(HomeActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VolDetail);

