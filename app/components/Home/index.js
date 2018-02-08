// @flow
import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import CounterPage from '../../containers/CounterPage';
import VolsPage from '../../containers/VolsPage';
import VolDetailPage from '../VolDetail/index';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import PlayList from '../PlayList/index';

import styles from './index.less';

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

    this.toggleMaskLayer = this.toggleMaskLayer.bind(this);
  }

  toggleMaskLayer() {
    const { toggleSidebar, togglePlayList, home } = this.props;

    if (home.sidebarStatus) {
      toggleSidebar();
    }

    if (home.playListStatus) {
      togglePlayList();
    }
  }

  render() {
    const { toggleSidebar, togglePlayList, home } = this.props;

    console.log(this.props);

    return (
      <div className={styles.container}>
        <div className={`${styles['mask-layer']} ${(home.playListStatus || home.sidebarStatus) ? styles.show : ''}`} onClick={this.toggleMaskLayer} />
        <Header handleToggleSidebar={toggleSidebar} handleTogglePlayList={togglePlayList} playListStatus={home.playListStatus}/>
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
