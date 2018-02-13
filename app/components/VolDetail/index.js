// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './index.less';

type Props = {
  match: {
    params: {
     id: string
    }
  }
};

export default class Home extends Component<Props> {
  props: Props;

  constructor(props) {
    super(props);
    this.state = {
      detail: {
        tracks: [],
      },
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

  setAppBG(src) {
    document.querySelector('.bg-before').style.backgroundImage = `url('${src}')`;
  }

  fetchVolDetail() {
    window.fetch(`http://198.13.46.251:9527/api/luoo/vols/${this.props.match.params.id}`, {
      method: 'GET'
    }).then(response => response.json()).then((body) => {
      body.description = body.description.replace(/<br\s*\/>/ig, '\n\n\n');
      body.description = body.description.replace(/<\/?[^>]*>/g, '');
      this.setState({ detail: body });
      this.setAppBG(body.cover);

      return body;
    });
  }

  render() {
    let { detail } = this.state;
    console.log('this vol detail');
    console.log(this.props);

    return (
      <div className={styles.container}>
        <div className={styles.inner} data-tid="vols">
          <div className={styles.info}>
            <div className={styles.info__cover}>
              <img className={styles['info__cover-image']} src={detail.cover} alt={detail.title}/>
            </div>
            <div className={styles.info__content}>
              <div className={styles['info__content-title']}>{detail.title}</div>
              <div className={styles['info__content-meta']}>
                Vols: {detail.vol_number}
                {detail.created_at}
              </div>
              <div className={styles['info__content-desc']}>
              {/*<div dangerouslySetInnerHTML={{__html: detail.description}}></div>*/}
              </div>
            </div>
          </div>
          <div className={styles.tracklist}>
            {detail.tracks.map((track, i) => {
              return (
                <div className={styles['track-item']} key={i}>
                  <div className={styles['track-item__order']}>{track.order_id}</div>
                  <div className={styles['track-item__title']}>{track.name}</div>
                  <div className={styles['track-item__artist']}>{track.artist}</div>
                  <div className={styles['track-item__album']}>{track.album}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
