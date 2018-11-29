import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Modal extends Component {
  render() {
    const modal = {
      width: 500,
      height: 400,
      position: 'absolute',
      left: '50%',
      top: '50%',
      marginLeft: -250,
      marginTop: -50,
      border: 'solid black 1px',
      background: 'white'
    };

    const element = document.getElementById('modal');

    if (!this.props.isOpen || !element) return null;

    return ReactDOM.createPortal(<div style={modal}>{this.props.children}</div>, element);
  }
}
