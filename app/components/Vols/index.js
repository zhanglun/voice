// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './index.less';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  constructor(props) {
    super(props);

    this.state = {
      vols: [],
    };
    this.axiosInstance = window.axiosInstance;
  }

  componentDidMount() {
    this.fetchVols();
  }

  fetchVols() {
    let params = {
      page_size: 30,
    };
    this.axiosInstance.get('luoo/vols', { params })
      .then((res) => res.data)
      .then((body) => {
        body.forEach((item) => {
          item.title = item.title.replace(/-落网/, '');
        });

        this.setState({ vols: body });

        return body;
      })
      .catch(() => {

      });
  }

  render() {
    const { vols } = this.state;

    return (
      <div className={styles.container}>
        <div className={styles.inner} data-tid="vols">
          {vols.map((vol) => (
            <div key={vol.id} className={styles.item}>
              <Link className={styles.item__link} to={`/vols/${vol.vol_id}`}>
                <div className={styles.item__cover}>
                  <img className={styles['item__cover-image']} src={vol.cover} alt={vol.title}/>
                </div>
                <div className={styles.item__content}>
                  {vol.title}
                </div>
              </Link>
            </div>
            ))}
          <div key="ghost1" className={styles.item}>
          </div>
          <div key="ghost2" className={styles.item}>
          </div>
        </div>
      </div>
    );
  }
}
