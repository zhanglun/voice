// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Vols.less';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.inner} data-tid="vols">
          <h2>Vols</h2>
        </div>
      </div>
    );
  }
}
