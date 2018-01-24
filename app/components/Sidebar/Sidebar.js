import React, { Component } from 'react';
import { route, Link } from 'react-router-dom';

import style from './Sidebar.less';

type Props = {
  show: boolean,
  handleToggle: () => void
};

export default class Sidebar extends Component<Props> {
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
      <div className={`${style.container} ${show ? style.show : ''}`} onClick={this.handleClose}>
        lalla用这个开源组件 https://github.com/negomi/react-burger-menu
      </div>
    );
  }
}

