import React from 'react';

class DataShower extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>I'm a data shower</h1>
        {JSON.stringify(this.props)}
      </div>
    );
  }
}

export default DataShower;
