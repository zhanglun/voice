// @flow
import * as React from 'react';
import HomePage from '../components/Home';

type Props = {
  children: React.Node
};

export default class App extends React.Component<Props> {
  props: Props;

  render() {
    return (
      <div className="App">
        <div className="bg-before" />
        <div className="bg" />
        {this.props.children}
      </div>
    );
  }
}
