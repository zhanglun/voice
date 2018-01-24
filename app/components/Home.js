// @flow
import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Route, Link } from 'react-router-dom';
import CounterPage from '../containers/CounterPage';
import VolsPage from '../containers/VolsPage';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';

import styles from './Home.css';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  constructor(props) {
    super(props);
    this.state = {
      openSidebar: false,
    };

    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  toggleSidebar() {
    this.setState({ openSidebar: !this.state.openSidebar });
  }

  render() {
    return (
      <div className={styles.container}>
        <Header />
        {/*<ReactCSSTransitionGroup*/}
          {/*transitionName="example"*/}
          {/*transitionEnterTimeout={500}*/}
          {/*transitionLeaveTimeout={300}*/}
        {/*>*/}
        <Sidebar show={this.state.openSidebar} handleToggle={this.toggleSidebar} />
        {/*</ReactCSSTransitionGroup>*/}
        <div className={styles.inner} data-tid="container">
          <h2>Home</h2>
          <span data-tclass="btn" onClick={this.toggleSidebar}>adfadfadf{this.state.openSidebar}</span>
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
