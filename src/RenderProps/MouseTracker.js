import React, { Component } from 'react';

// This allows tracking of mouse, how do we make this reusable?
class MouseTracker extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
        <h1>Move the mouse around!</h1>
        <p>
          The current mouse position is ({this.state.x}, {this.state.y})
        </p>
      </div>
    );
  }
}

// ------------------------------------------------------

// Now the Mouse component encapsulates the mouse movement. Still not truly reusable.
class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
        {/* ...but how do we render something other than a <p>? */}
        <p>
          The current mouse position is ({this.state.x}, {this.state.y})
        </p>
      </div>
    );
  }
}

export default class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        <Mouse />
      </div>
    );
  }
}

// ------------------------------------------------------

// class Cat extends Component {
//   render() {
//     const mouse = this.props.mouse;
//     return <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq_Rqw81glpzkrdqhYxSETMe_z3YqHSjE6-ZkIP7nj4YC_RX1Y1w" alt="mouse" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />;
//   }
// }

// class Mouse extends Component {
//   constructor(props) {
//     super(props);
//     this.handleMouseMove = this.handleMouseMove.bind(this);
//     this.state = { x: 0, y: 0 };
//   }

//   handleMouseMove(event) {
//     this.setState({
//       x: event.clientX,
//       y: event.clientY
//     });
//   }

//   render() {
//     return (
//       <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
//         {/*
//           Instead of providing a static representation of what <Mouse> renders,
//           use the `render` prop to dynamically determine what to render.
//         */}
//         {this.props.render(this.state)}
//       </div>
//     );
//   }
// }

// export default class MouseTracker extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Move the mouse around!</h1>
//         <Mouse render={mouse => <Cat mouse={mouse} />} />
//       </div>
//     );
//   }
// }
