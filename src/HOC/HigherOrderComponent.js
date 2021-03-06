// import React from 'react';

// const higherOrderComponent = WrappedComponent => {
//   class HOC extends React.Component {
//     render() {
//       return <WrappedComponent />;
//     }
//   }

//   return HOC;
// };

// const SimpleHOC = higherOrderComponent(MyComponent);

// ----------------------------------------------------------------------------

// import React from 'react';

// const withSecretToLife = (WrappedComponent) => {
//   class HOC extends React.Component {
//     render() {
//       return (
//         <WrappedComponent
//           {...this.props}
//           secretToLife={42}
//         />
//       );
//     }
//   }

//   return HOC;
// };

// export default withSecretToLife;

// ----------------------------------------------------------------------------

// import React from 'react';
// import withSecretToLife from 'components/withSecretToLife';

// const DisplayTheSecret = props => <div>The secret to life is {props.secretToLife}.</div>;

// const WrappedComponent = withSecretToLife(DisplayTheSecret);

// export default WrappedComponent;
