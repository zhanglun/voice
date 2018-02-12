// @flow
import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import CounterPage from '../containers/CounterPage';
import VolsPage from '../containers/VolsPage';
import VolDetailPage from './VolDetail';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import PlayList from './PlayList';

import styles from './Home.css';

type Props = {
  home: object,
  toggleSidebar: () => void,
  togglePlayList: () => void
};

export default class Home extends Component<Props> {
  props: Props;

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { toggleSidebar, togglePlayList, home } = this.props;

    console.log(this.props);

    return (
      <div className={styles.container}>
        <Header handleToggleSidebar={toggleSidebar} handleTogglePlayList={togglePlayList} />
        <Sidebar key="sidebar" show={home.sidebarStatus} handleToggle={toggleSidebar} />
        <PlayList key="playlist" show={home.playListStatus} handleToggle={togglePlayList} />
        <div className={styles.inner} data-tid="container">
          <Route exact path="/vols" component={VolsPage} />
          <Route path="/vols/:id" component={VolDetailPage} />
          <Route path="/counter" component={CounterPage} />
        </div>
      </div>
    );
  }
}
