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
      <div>
        <Header />
        <div className={styles.container} data-tid="container">
          <h2>Voice</h2>
          <Link to="/counter">to Counter</Link>
        </div>
      </div>
    );
  }
}
