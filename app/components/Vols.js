// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Vols.less';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  constructor(props) {
    super(props);
    this.state = {
      vols: [],
    };
  }

  componentDidMount() {
    this.fetchVols();
  }

  fetchVols() {
    window.fetch('http://198.13.46.251:9527/api/luoo/vols', {
      method: 'GET'
    }).then((res) => {
      console.log(res);
      this.setState({ vols: res });
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.inner} data-tid="vols">
          <h2>Vols</h2>
          {this.state.vols}
        </div>
      </div>
    );
  }
}
