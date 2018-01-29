// @flow
import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import CounterPage from '../containers/CounterPage';
import VolsPage from '../containers/VolsPage';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';

import styles from './Home.css';

type Props = {
  home: object,
  toggleSidebar: () => void,
  children: React.Node
};

export default class Home extends Component<Props> {
  props: Props;

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { toggleSidebar, home } = this.props;

    return (
      <div className={styles.container}>
        <Header handleToggle={toggleSidebar} />
        <Sidebar key="sidebar" show={home.sidebarStatus} handleToggle={toggleSidebar} />
        <div className={styles.inner} data-tid="container">
          {this.props.children}
        </div>
        <Link className={styles['nav-link']} to="/vols">正在播放</Link>
        <Link className={styles['nav-link']} to="/counter">to Counter</Link>

        <Route path="/vols" component={VolsPage} />
        <Route path="/counter" component={CounterPage} />
      </div>
    );
  }
}
