// @flow
import * as React from 'react';

type Props = {
  children: React.Node
};

export default class App extends React.Component<Props> {
  props: Props;

  render() {
    return (
      <div className="App">
        <div className="bg bg-blur" />
        {this.props.children}
      </div>
    );
  }
}
