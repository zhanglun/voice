import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import VolDetail from '../components/VolDetail';
import * as PlayListActions from '../actions/playList';

function mapStateToProps(state) {
  return {
    ...state,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PlayListActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VolDetail);

