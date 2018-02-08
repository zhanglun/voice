import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Vols from '../components/Vols/index';
import * as VolsActions from '../actions/vols';

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(VolsActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Vols);

