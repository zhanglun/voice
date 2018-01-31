// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './VolDetail.less';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  constructor(props) {
    super(props);
    this.state = {
      detail: [],
    };
  }

  componentDidMount() {
    this.fetchVolDetail();
  }

  fetchVolDetail() {
    window.fetch('http://198.13.46.251:9527/api/luoo/vols', {
      method: 'GET'
    }).then(response => response.json()).then((body) => {
      body.forEach((item) => {
        item.title = item.title.replace(/-落网/, '');
      });

      this.setState({ vols: body });

      return body;
    });
  }

  render() {
    let { detail } = this.state;

    return (
      <div className={styles.container}>
        <div className={styles.inner} data-tid="vols">
          <h1>Vol Detail</h1>
        </div>
      </div>
    );
  }
}
