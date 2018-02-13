import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import VolDetail from '../components/VolDetail';
import * as PlayListActions from '../actions/playList';

console.log('VolsActions', PlayListActions);

function mapStateToProps(state) {
  console.log('voldetailpage', state);
  return {
    ...state,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PlayListActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VolDetail);

