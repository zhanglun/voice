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
    }).then(response => response.json()).then((body) => {
      body.forEach((item) => {
        item.title = item.title.replace(/-落网/, '');
      });

      this.setState({ vols: body });

      return body;
    });
  }

  render() {
    let { vols } = this.state;

    return (
      <div className={styles.container}>
        <div className={styles.inner} data-tid="vols">
          {vols.map((vol) => {
            return (
              <div key={vol.id} className={styles.item}>
                <div className={styles.item__cover}>
                  <img className={styles['item__cover-image']} src={vol.cover} alt={vol.title} />
                </div>
                <div className={styles.item__content}>
                  <div>
                    <Link to={`/vols/${vol.vol_id}`}>{vol.title} + {vol.vol_id}</Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
