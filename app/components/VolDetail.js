// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './VolDetail.less';

type Props = {
  match: {}
};

export default class Home extends Component<Props> {
  props: Props;

  constructor(props) {
    super(props);
    this.state = {
      detail: {},
    };
  }

  componentDidMount() {
    this.initParams();
    this.fetchVolDetail();
  }

  initParams() {
    const { params } = this.props.match;

    this.setState({ ...params });
  }

  fetchVolDetail() {
    console.log(this.state);
    window.fetch(`http://198.13.46.251:9527/api/luoo/vols/${this.props.match.params.id}`, {
      method: 'GET'
    }).then(response => response.json()).then((body) => {
      console.log(body);
      this.setState({ detail: body });

      return body;
    });
  }

  render() {
    let { detail } = this.state;

    return (
      <div className={styles.container}>
        <div className={styles.inner} data-tid="vols">
          <h1>Vol Detail{detail.id}</h1>
          <div className={styles.info}>
            <div className={styles.info__cover}>
              <img className={styles['info__cover-image']} src={detail.cover} alt={detail.title} />
            </div>
            <div className={styles.info__content}>
              <div className={styles['info__content-title']}>{detail.title}</div>
              <div className={styles['info__content-desc']}>
                <div dangerouslySetInnerHTML={{__html: detail.description}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
