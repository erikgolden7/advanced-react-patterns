import React, { Component } from 'react';
import Toolbar from './Toolbar';

export const ThemeContext = React.createContext({ color: 'light' });

class Context extends Component {
  state = { theme: 'dark' };

  render() {
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

export default Context;
