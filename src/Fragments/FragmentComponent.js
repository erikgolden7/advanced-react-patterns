import React, { Component, Fragment } from 'react';

export default class FragmentComponent extends Component {
  render() {
    return (
      <Fragment>
        <p>Hello</p>
        <p>World</p>
      </Fragment>
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
