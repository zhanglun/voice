import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.less';

type Props = {
  handleToggle: () => void
};

export default class Header extends Component<Props> {
  props: Props;

  render () {
    const { handleToggle } = this.props;

    return (
      <div className={styles.header}>
        <div className={styles.sidebar}>
          <div className={styles['burger-wrapper']} onClick={handleToggle}>
            <div className={styles.burger}/>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles['controls-track-info']}>
            <div className={styles.thumb}></div>
            <div className={styles.info}>
              <div className={styles.title}>Friday Comes</div>
              <div className={styles.artist}>Early</div>
            </div>
          </div>
          <div className={styles['controls-mini-player']}>
            <div className={styles['controls-button--backward']}>
              <i className="fa fa-step-backward"/>
            </div>
            <div className={styles['controls-button--switch']}>
              <i className="fa fa-play"/>
              <i className="fa fa-pause"/>
            </div>
            <div className={styles['controls-button--forward']}>
              <i className="fa fa-step-forward"/>
            </div>
          </div>
          <div className={styles.menuTrigger}>
            <i className="fa fa-list"/>
          </div>
        </div>
      </div>
    );
  }
}
