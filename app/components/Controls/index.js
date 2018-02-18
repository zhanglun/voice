import React, { Component } from 'react';
import styles from './index.less';

type Props = {
  onAddAndPlay: () => void
};

export default class Controls extends Component<Props> {
  prop: Props;

  constructor(props) {
    super(props);

    this.handleAddAndPlay = this.handleAddAndPlay.bind(this);
  }

  handleAddAndPlay() {
    const { onAddAndPlay } = this.props;

    onAddAndPlay();
  }

  render() {
    return (
      <div className={styles.container}>
        <div
          role="presentation"
          className={styles.play}
          onClick={this.handleAddAndPlay}
        >
          <i className="fa fa-play-circle"></i>
        </div>
        <div className={styles.download}>
          <i className="fa fa-download"></i>
        </div>
      </div>
    );
  }

}
