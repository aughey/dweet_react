import React from 'react';
import Gauges from 'canvas-gauges'

class Gauge extends React.Component {
  componentDidMount() {
    var gauge = new Gauges.RadialGauge({
     renderTo: this.el,
     minValue: 0,
     maxValue: 1
   })
   this.gauge = gauge;
   this.gauge.value = this.props.value;
  }
  componentWillUpdate() {
      this.gauge.value = this.props.value;
  }
  componentWillUnmount() {}
  render() {
    return (
      <div>
        Gauge
        <canvas ref={el => this.el = el}/>
      </div>
    );
  }
}

export default Gauge;
