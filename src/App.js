import React, { Component } from 'react';

// Compound Components
import Tabs from './Compound_Components/Example_One/Tabs';
import glamorous from 'glamorous';
import Toggle from './Compound_Components/Example_Two/Toggle';

// Proptypes
import Button from './PropTypes/Button';

// Fragments
import FragmentComponent from './Fragments/FragmentComponent';

// Portals
import Modal from './Portals/Modal';

// Context
// import Context from './Context/Without_Context/Context';
import Context from './Context/With_Context/Context';

// Render Props
import SharedComponent from './RenderProps/SharedComponent';
import Mouse from './RenderProps/Mouse';
import SwapiContainer from './RenderProps/SwapiContainer';

// HOC (Higher Order Components)
import { WithSwapi } from './HOC/SwapiHOC';
import SwapiPeople from './HOC/SwapiPeople';
import SwapiPlanets from './HOC/SwapiPlanets';

const ComponentWithSwapiNames = WithSwapi(SwapiPeople, 'people');
const ComponentWithSwapiPlanets = WithSwapi(SwapiPlanets, 'planets');

class App extends Component {
  constructor() {
    super();
    this.state = {
      modalOpen: false
    };
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Compound Components</h1>
        <h3>Example One</h3>
        <Tabs
          activeTab={{
            id: 'tab1'
          }}
        >
          <Tabs.Tab id="tab1" title="Tab 1">
            <glamorous.Div padding={20}>This is tab 1</glamorous.Div>
          </Tabs.Tab>
          <Tabs.Tab id="tab2" title="Tab 2">
            <glamorous.Div padding={20}>This is tab 2</glamorous.Div>
          </Tabs.Tab>
        </Tabs>

        <h3>Example Two</h3>
        <Toggle />

        <h1>Portals</h1>
        <button onClick={() => this.setState({ modalOpen: !this.state.modalOpen })}>Open Modal</button>
        <Modal isOpen={this.state.modalOpen}>
          <div>Modal is open</div>
        </Modal>

        <h1>PropTypes</h1>
        <Button
          handleClick={() => console.log('clicked!')}
          style={{ width: 100, height: 25, borderRadius: 4, background: 'salmon' }}
          show={true}
        >
          Button
        </Button>

        <h1>Fragments</h1>
        <FragmentComponent />

        <h1>Context</h1>
        <Context />

        <h1>HOC</h1>
        <ComponentWithSwapiNames />
        <ComponentWithSwapiPlanets />

        <h1>Render Props</h1>
        <SharedComponent render={() => <span>hello!</span>} />
        <SwapiContainer
          type="vehicles"
          render={({ type }) => (
            <div>
              {type.map((e, i) => (
                <p key={i} style={{ color: 'orange' }}>
                  {e.name}
                </p>
              ))}
            </div>
          )}
        />
        <h3>Mouse Tracker</h3>
        <Mouse>
          {({ x, y }) => (
            <div style={{ height: '30vh', width: '100%' }}>
              Your position is {x} & {y}
            </div>
          )}
        </Mouse>
      </div>
    );
  }
}

export default App;
