// @flow
import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import CounterPage from '../../containers/CounterPage';
import VolsPage from '../../containers/VolsPage';
import VolDetailPage from '../../containers/VolDetailPage';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import PlayList from '../PlayList/index';

import styles from './index.less';

type Props = {
  sidebarStatus: boolean,
  playListStatus: boolean,
  toggleSidebar: () => void,
  togglePlayList: () => void,
  playStatus: boolean,
  currentTrack: object,
  playList: [],
  play: () => void,
  onPrevious: () => void,
  onNext: () => void
};

export default class Home extends Component<Props> {
  props: Props;

  constructor(props) {
    super(props);
    this.state = {};

    this.toggleMaskLayer = this.toggleMaskLayer.bind(this);
  }

  toggleMaskLayer() {
    const { toggleSidebar, togglePlayList, sidebarStatus, playListStatus } = this.props;

    if (sidebarStatus) {
      toggleSidebar();
    }

    if (playListStatus) {
      togglePlayList();
    }
  }

  render() {
    const {
      toggleSidebar,
      togglePlayList,
      sidebarStatus,
      playListStatus,
      playList,
      play,
      onPrevious,
      onNext,
      playStatus,
      currentTrack,
    } = this.props;

    console.log(this.props);

    return (
      <div className={styles.container}>
        <div
          role="button"
          className={`${styles['mask-layer']} ${(playListStatus || sidebarStatus) ? styles.show : ''}`}
          onClick={this.toggleMaskLayer}
        />
        <Header
          handleToggleSidebar={toggleSidebar}
          handleTogglePlayList={togglePlayList}
          playListStatus={playListStatus}
          currentTrack={currentTrack}
          isPlay={playStatus}
          onPlay={play}
          onPrevious={onPrevious}
          onNext={onNext}
        />
        <Sidebar
          key="sidebar"
          show={sidebarStatus}
          handleToggle={toggleSidebar}
        />
        <PlayList
          key="playlist"
          show={playListStatus}
          handleToggle={togglePlayList}
          list={playList}
        />
        <audio
          id="audio"
          src={currentTrack.url}
          preload="auto"
          autoPlay
        >
          <track
            kind="captions"
            src={currentTrack.url}
            label="English"
          />
        </audio>
        <div className={styles.inner} data-tid="container">
          <Route exact path="/vols" component={VolsPage}/>
          <Route path="/vols/:id" component={VolDetailPage}/>
          <Route path="/counter" component={CounterPage}/>
        </div>
      </div>
    );
  }
}
