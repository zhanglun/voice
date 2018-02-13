import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import VolDetail from '../components/VolDetail';
import * as VolsActions from '../actions/vols';
import { ADD_TRACK } from '../actions/playList';

function mapStateToProps(state) {
  return {
    play: state.play,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(VolsActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VolDetail);

