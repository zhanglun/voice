import React, { Component } from 'react';
import styles from './Header.less';

type Props = {
  playListStatus: boolean,
  handleToggleSidebar: () => void,
  handleTogglePlayList: () => void,
  currentTrack: object,
  isPlay: boolean,
  onPlay: () => void,
  onPrevious: () => void,
  onNext: () => void
};

export default class Header extends Component<Props> {
  props: Props;

  constructor(props) {
    super();
    this.handleOnPlay = this.handleOnPlay.bind(this);
    this.handleOnPrevious = this.handleOnPrevious.bind(this);
    this.handleOnNext = this.handleOnNext.bind(this);
  }

  handleOnPlay() {
    const { onPlay, isPlay } = this.props;

    onPlay();

    const audio = document.getElementById('audio');

    if (isPlay) {
      audio.pause();
    } else {
      audio.play();
    }
  }

  handleOnPrevious() {
    const { onPrevious } = this.props;

    onPrevious();
  }

  handleOnNext() {
    const { onNext } = this.props;

    onNext();
  }

  render() {
    const {
      playListStatus,
      handleToggleSidebar,
      handleTogglePlayList,
      isPlay,
      currentTrack
    } = this.props;

    let switchIcon = null;

    if (isPlay) {
      switchIcon = <i className="fa fa-pause" />;
    } else {
      switchIcon = <i className="fa fa-play" />;
    }

    return (
      <div className={styles.header}>
        <div className={styles.sidebar}>
          <div className={styles['burger-wrapper']} onClick={handleToggleSidebar}>
            <div className={styles.burger}/>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles['controls-track-info']}>
            <div className={styles.thumb}>
              <img
                className={styles.thumb__image}
                src={currentTrack.cover}
                alt=""
              />
            </div>
            <div className={styles.info}>
              <div className={styles.title}>{currentTrack.name}</div>
              <div className={styles.artist}>{currentTrack.artist}</div>
            </div>
          </div>
          <div className={styles['controls-mini-player']}>
            <div className={styles['controls-button--backward']} onClick={this.handleOnPrevious}>
              <i className="fa fa-step-backward"/>
            </div>
            <div className={styles['controls-button--switch']} onClick={this.handleOnPlay}>
              {switchIcon}
            </div>
            <div className={styles['controls-button--forward']} onClick={this.handleOnNext}>
              <i className="fa fa-step-forward"/>
            </div>
          </div>
          <div className={`${styles.menuTrigger} ${playListStatus ? styles.menuTriggerOffset : ''}`} onClick={handleTogglePlayList}>
            <i className="fa fa-list"/>
          </div>
        </div>
      </div>
    );
  }
}
