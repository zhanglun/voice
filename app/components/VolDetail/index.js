// @flow
import React, { Component } from 'react';
import Controls from '../Controls';
import styles from './index.less';

type Props = {
  match: {
    params: {
     id: string
    }
  },
  addTrack: () => void,
  addTrackAndPlay: () => void
};

export default class VolDetail extends Component<Props> {
  props: Props;

  constructor(props) {
    super(props);
    this.state = {
      detail: {
        tracks: [],
      },
    };

    this.axiosInstance = window.axiosInstance;
  }

  componentDidMount() {
    this.initParams();
    this.fetchVolDetail();
  }

  initParams() {
    const { params } = this.props.match;

    this.setState({ ...params });
  }

  // setAppBG(src) {
  //   document.querySelector('.bg-before').style.backgroundImage = `url('${src}')`;
  // }

  fetchVolDetail() {
    this.axiosInstance.get(`luoo/vols/${this.props.match.params.id}`)
      .then((res) => res.data)
      .then((body) => {
        body.description = body.description.replace(/<br\s*\/>/ig, '\n\n\n');
        body.description = body.description.replace(/<\/?[^>]*>/g, '');

        body.title = body.title.replace(/-落网/ig, '');

        this.setState({ detail: body });

        return body;
      })
      .catch(() => {

      });
  }

  render() {
    const { detail } = this.state;
    const { addTrack, addTrackAndPlay } = this.props;

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
                <span className={styles['info__content-meta-vol']}>Vols: {detail.vol_number}</span>
                <span className={styles['info__content-meta-date']}>{detail.created_at}</span>
              </div>
              <div className={styles['info__content-desc']} dangerouslySetInnerHTML={{ __html: detail.description }}/>
            </div>
          </div>
          <div className={styles.tracklist}>
            {detail.tracks.map((track) => (
              <div className={styles['track-item']} key={track.name}>
                <div
                  role="presentation"
                  className={styles['track-item__title']}
                  onClick={() => addTrack(track)}
                >{track.name}
                </div>
                <Controls
                  onAddAndPlay={() => addTrackAndPlay(track)}
                />
                <div className={styles['track-item__artist']}>{track.artist}</div>
                <div className={styles['track-item__album']}>{track.album}</div>
              </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}
