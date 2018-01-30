import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import CounterPage from '../../containers/CounterPage';
import VolsPage from '../../containers/VolsPage';

import styles from './Sidebar.less';

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
      <div className={`${styles.container} ${show ? styles.show : ''}`} onClick={this.handleClose}>
        <div className={styles.nav}>
          <ul className={styles['nav__inner--ghost']}>
          </ul>
          <ul className={styles.nav__inner}>
            <li className={styles['nav-item']}>
              <Link className={styles['nav-link']} to="/vols">正在播放</Link>
            </li>
            <li className={styles['nav-item']}>
              <Link className={styles['nav-link']} to="/vols">期刊</Link>
            </li>
            <li className={styles['nav-item']}>
              <Link className={styles['nav-link']} to="/">分类</Link>
            </li>
            <li className={styles['nav-item']}>
              <Link className={styles['nav-link']} to="/counter">to Counter</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

