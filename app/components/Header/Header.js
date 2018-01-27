import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.less';

type Props = {
  handleToggle: () => void
};

export default class Header extends Component<Props> {
  props: Props;

  render() {
    const { handleToggle } = this.props;

    return (
      <div className={styles.header}>
        <div className={styles.menuTrigger}>
          <i className="fa fa-bars" onClick={handleToggle} />
        </div>
        <div className={styles.right}>
          <div className={styles.controls}>
            adfasdfasdf
          </div>
          <div className={styles.menuTrigger}>
            <i className="fa fa-bars" />
          </div>
        </div>
      </div>
    );
  }
}
