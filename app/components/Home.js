// @flow
import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Route, Link } from 'react-router-dom';
import CounterPage from '../containers/CounterPage';
import VolsPage from '../containers/VolsPage';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';

import styles from './Home.css';

type Props = {
  home: object,
  toggleSidebar: () => void
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
          <h2>Home</h2>
          <span data-tclass="btn" onClick={toggleSidebar}>prop toggle{home.sidebarStatus}</span>
          <Link to="/vols">to Vols</Link>
          <Link to="/">to Home</Link>
          <Link to="/counter">to Counter</Link>
          <Route path="/vols" component={VolsPage} />
          <Route path="/counter" component={CounterPage} />
        </div>
      </div>
    );
  }
}
