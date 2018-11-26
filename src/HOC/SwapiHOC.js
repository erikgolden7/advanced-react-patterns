import React, { Component } from 'react';
import axios from 'axios';

export function WithSwapi(WrappedComponent, selectData) {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        data: []
      };
    }

    componentDidMount() {
      axios.get(`https://swapi.co/api/${selectData}`).then(res => this.setState({ data: res.data.results }));
    }

    render() {
      return <WrappedComponent data={this.state.data} type={selectData.toUpperCase()} {...this.props} />;
    }
  };
}
