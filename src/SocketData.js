import React from 'react';

class SocketData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: null}
  }
  componentDidMount() {
    this.props.socket.emit('sub',{key: this.props.id});
    var update = (data) => {
      this.setState({
        data: JSON.parse(data)
      })
    }
    this.props.socket.on(this.props.id, update);
    this.update = update;
  }
  componentWillUnmount() {
    this.props.socket.off(this.props.id,this.update);
  }
  render() {
    if(!this.state.data) {
      return (
        <div>No data for key {this.props.id}</div>
      );
    } else {
      return (
        <pre>{JSON.stringify(this.state.data,null,'  ')}</pre>
      )
    }
  }
}

export default SocketData;
