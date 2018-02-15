import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PlayList from '../components/PlayList';
import * as PlayerActions from '../actions/playList';


function mapStateToProps(state) {
  return {
    play: state.play,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PlayerActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayList);
