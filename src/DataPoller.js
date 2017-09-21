import React from 'react';
import jquery from 'jquery'
import DataShower from './DataShower'
import Graph from './Graph'
import Gauge from './Gauge'

class DataPoller extends React.Component {
  componentDidMount() {
    var self = this;
    function getData() {
      self.periodic = null;
      jquery.get("/dweet/for/aughey/test_sender").then(data => {
        self.setState(data);
      }).always(() => {
        self.periodic = setTimeout(getData,100);
      });
    }
    getData();
  }
  componentWillUnmount() {
    clearTimeout(this.periodic);
  }
  render() {
    if(!this.state) {
      return <div>No data yet</div>
    }
    return (
      <div>
          <DataShower content={this.state.data}/>
          <Graph title="Cosine" value={this.state.data.cos} />
          <Gauge value={this.state.data.cos}/>
        </div>
    );
  }
}

export default DataPoller;
