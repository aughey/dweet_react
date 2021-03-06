import React from 'react';

class SocketImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }
  componentDidMount() {
    this.props.socket.emit('sub', {key: this.props.id, short: true});
    var update = (data) => {
      this.setState({data: data})
    }
    this.props.socket.on(this.props.id, update);
    this.update = update;
  }
  componentWillUnmount() {
    this.props.socket.off(this.props.id, this.update);
  }
  render() {
    if (!this.state.data) {
      return (
        <div>No data for image key {this.props.id}</div>
      );
    }

    var url = this.state.data + "?" + (new Date()).getTime().toString();

    return (<img alt="image" src={url}/>)

  }
}

export default SocketImage;
