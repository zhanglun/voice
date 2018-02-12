import React, { Component } from 'react';
import styles from './index.less';

type Props = {
  show: boolean,
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
    const { show } = this.props;

    return (
      <div className={`${styles.container} ${show ? styles.show : ''}`} onClick={this.handleClose}>
        afdfdf
      </div>
    );
  }
}
