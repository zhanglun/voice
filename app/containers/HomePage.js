import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../components/Home/index';
import * as HomeActions from '../actions/home';
import * as PlayActions from '../actions/playList';

function mapStateToProps(state) {
  return {
    ...state.home,
    ...state.player,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({...HomeActions, ...PlayActions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
