// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.inner} data-tid="container">
          <h2>Vols</h2>
        </div>
      </div>
    );
  }
}
