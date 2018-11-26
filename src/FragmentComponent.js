import React, { Component } from 'react';

export default class FragmentComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <td>Hello</td>
        <td>World</td>
      </React.Fragment>
    );
  }
}

// export default class FragmentComponent extends Component {
//   render() {
//     return (
//       <>
//         <td>Hello</td>
//         <td>World</td>
//       </>
//     );
//   }
// }
