// Compound Components
import React, { Component } from 'react';
import { Switch } from './Switch';

class Toggle extends Component {
  static On = ({ on, children }) => (on ? children : null);
  static Off = ({ on, children }) => (on ? null : children);
  static Button = ({ on, toggle, ...props }) => <Switch on={on} onClick={toggle} {...props} />;
  state = { on: false };

  toggle = () => this.setState(({ on }) => ({ on: !on }), () => this.props.onToggle(this.state.on));

  render() {
    return React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        on: this.state.on,
        toggle: this.toggle
      })
    );
  }
}

function Usage({ onToggle = (...args) => console.log('onToggle', ...args) }) {
  return (
    <Toggle onToggle={onToggle}>
      <Toggle.Off>The button is off</Toggle.Off>
      <Toggle.Button />
      <Toggle.On>The button is on</Toggle.On>
    </Toggle>
  );
}
Usage.title = 'Compound Components';

export { Toggle, Usage as default };
