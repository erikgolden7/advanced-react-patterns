import React, { Component } from 'react';

export class Button extends Component {
  render() {
    const styles = {
      light: { background: '#83C8F2', padding: 10, fontSize: 16 },
      dark: { background: '#003263', color: 'white', padding: 10, fontSize: 16 }
    };

    return (
      <div>
        <input
          type="button"
          value={`My ${this.props.theme} button`}
          style={styles[this.props.theme]}
          onClick={() => this.props.toggle()}
        />
      </div>
    );
  }
}

export default Button;
