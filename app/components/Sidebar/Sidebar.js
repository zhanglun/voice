import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import CounterPage from '../../containers/CounterPage';
import VolsPage from '../../containers/VolsPage';

import style from './Sidebar.less';

type Props = {
  show: boolean,
  handleToggle: () => void
};

export default class Sidebar extends Component<Props> {
  props: Props;

  constructor(props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.props.handleToggle();
  }

  render() {
    const { show } = this.props;

    return (
      <div className={`${style.container} ${show ? style.show : ''}`} onClick={this.handleClose}>
        <Link to="/vols">to Vols</Link>
        <Link to="/">to Home</Link>
        <Link to="/counter">to Counter</Link>
        <Route path="/vols" component={VolsPage} />
        <Route path="/counter" component={CounterPage} />
      </div>
    );
  }
}

