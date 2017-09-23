import React from 'react';
import {SocketProvider} from 'socket.io-react';
import socketio from 'socket.io-client'
import DataShower from './DataShower'
import Graph from './Graph'
import Gauge from './Gauge'
import SocketData from './SocketData'
import SocketImage from './SocketImage'

class DataPoller extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      connected: false
    }
  }
  componentDidMount() {
    var self = this;
    this.socket = socketio.connect('http://localhost:3000');
    this.socket.on('connect', () => {
      console.log("connected")
      this.setState({
        connected: true
      })
    });
    this.socket.on('disconnect', () => {
      this.setState({
        connected: false
      })
    })
  }
  componentWillUnmount() {}
  render() {
    if(this.state.connected) {
      return (
        <div>
          <SocketData socket={this.socket} id="aughey/test_sender"/>
          <SocketImage socket={this.socket} id="aughey/depthbuffer"/>
          <SocketImage socket={this.socket} id="aughey/framebuffer"/>
        </div>
      )
    } else {
      return (
        <div>
          Not Connected
        </div>
      )
    }

  }
}

export default DataPoller;
