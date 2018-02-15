import React, { Component } from 'react';
import styles from './index.less';

type Props = {
  show: boolean,
  list: [],
  handleToggle: () => void
};

export default class Player extends Component<Props> {
  props: Props;

  constructor(props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.props.handleToggle();
  }

  render() {
    const { show, list } = this.props;

    return (
      <div
        className={`${styles.container} ${show ? styles.show : ''}`}
        role="button"
        onClick={this.handleClose}
      >
        <div>
          <div className={styles.list}>
            {list.map((track) => {
              return (
                <div className={styles.item} key={track.name}>
                  <div className={styles.item__cover}>
                    <img src={track.cover} alt=""/>
                  </div>
                  <div className={styles.item__info}>
                    <div className={styles.item__name}>{track.name}</div>
                    <div className={styles.item__artist}>{track.artist}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
