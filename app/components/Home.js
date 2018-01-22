// @flow
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import CounterPage from '../containers/CounterPage';
import VolsPage from '../containers/VolsPage';
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
          <h2>Home</h2>
          <Link to="/vols">to Vols</Link>
          <Link to="/">to Home</Link>
          <Link to="/counter">to Counter</Link>
          <Route path="/vols" component={VolsPage} />
          <Route path="/counter" component={CounterPage} />
        </div>
      </div>
    );
  }
}
