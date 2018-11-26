import React, { Component } from 'react';
import Toolbar from './Toolbar';

class Context extends Component {
  state = { theme: 'dark' };

  toggleTheme = () => {
    const { theme } = this.state;

    if (theme === 'dark') {
      this.setState({ theme: 'light' });
      return;
    }
    this.setState({ theme: 'dark' });
  };

  render() {
    return <Toolbar toggle={this.toggleTheme} theme={this.state.theme} />;
  }
}

export default Context;
