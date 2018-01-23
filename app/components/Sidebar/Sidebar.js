import React, { Component } from 'react';
import { route, Link } from 'react-router-dom';

import style from './Sidebar.less';

type Props = {};

export default class Sidebar extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={style.container}>
        lalla用这个开源组件 https://github.com/negomi/react-burger-menu
      </div>
    );
  }
}
