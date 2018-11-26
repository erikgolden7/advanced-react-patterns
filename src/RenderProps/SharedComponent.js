import React from 'react';

class SharedComponent extends React.Component {
  render() {
    return <div>{this.props.render()}</div>;
  }
}

export default SharedComponent;
