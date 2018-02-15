import React, { Component } from 'react';
import styles from './Header.less';

type Props = {
  playListStatus: boolean,
  handleToggleSidebar: () => void,
  handleTogglePlayList: () => void,
  isPlay: boolean,
  onPlay: () => void
};

export default class Header extends Component<Props> {
  props: Props;

  constructor(props) {
    super();
    this.handleOnPlay = this.handleOnPlay.bind(this);
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

  render() {
    const { playListStatus, handleToggleSidebar, handleTogglePlayList, isPlay } = this.props;

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
            <div className={styles.thumb}/>
            <div className={styles.info}>
              <div className={styles.title}>Friday Comes</div>
              <div className={styles.artist}>Early</div>
            </div>
          </div>
          <div className={styles['controls-mini-player']}>
            <div className={styles['controls-button--backward']}>
              <i className="fa fa-step-backward"/>
            </div>
            <div className={styles['controls-button--switch']} onClick={this.handleOnPlay}>
              {switchIcon}
            </div>
            <div className={styles['controls-button--forward']}>
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
