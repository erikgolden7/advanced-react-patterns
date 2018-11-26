import React, { Component } from 'react';
import Button from './Button';

class ThemedButton extends Component {
  render() {
    return <Button toggle={this.props.toggle} theme={this.props.theme} />;
  }
}
export default ThemedButton;
