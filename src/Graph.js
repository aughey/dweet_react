import React from 'react';

class Graph extends React.Component {
  componentDidMount() {}
  componentWillUnmount() {}
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <div>value = {this.props.value}</div>
      </div>
    );
  }
}

export default Graph;
