import React, { Component } from 'react';
import axios from 'axios';

class SwapiContainer extends Component {
  constructor() {
    super();
    this.state = {
      type: []
    };
  }
  componentDidMount() {
    axios
      .get(`https://www.swapi.co/api/${this.props.type}`)
      .then(response => this.setState({ type: response.data.results }))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <h3>{this.props.type.toUpperCase()}</h3>
        {this.props.render(this.state)}
      </div>
    );
  }
}

export default SwapiContainer;
