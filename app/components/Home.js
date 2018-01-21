// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header/Header';
import styles from './Home.css';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container}>
        <Header />
        <div className={styles.inner} data-tid="container">
          <h2>Voice</h2>
          <Link to="/counter">to Counter</Link>
        </div>
      </div>
    );
  }
}
