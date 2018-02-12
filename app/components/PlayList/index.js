import React, { Component } from 'react';
import styles from './index.less';

type Props = {
  handleToggle: () => void
};

export default class Player extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container}>
      </div>
    );
  }
}
