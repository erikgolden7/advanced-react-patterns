import React, { Component } from 'react';
import { ThemeContext } from './Context';

export class Button extends Component {
  render() {
    const styles = {
      light: { background: '#83C8F2', padding: 10, fontSize: 16 },
      dark: { background: '#003263', color: 'white', padding: 10, fontSize: 16 }
    };

    return (
      <div>
        <ThemeContext.Consumer>
          {color => (
            <div>
              <input type="button" value={`My ${color} button`} style={styles[color]} />
            </div>
          )}
        </ThemeContext.Consumer>
      </div>
    );
  }
}

export default Button;
