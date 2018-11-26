import React, { Component } from 'react';
import Tabs from './Compound_Components/components/Tabs';
import glamorous from 'glamorous';

// Fragments
import FragmentComponent from './FragmentComponent';

// Context
// import Context from './Context/Without_Context/Context';
import Context from './Context/With_Context/Context';

// Render Props
import SharedComponent from './RenderProps/SharedComponent';
import MouseTracker from './RenderProps/MouseTracker';

// HOC
import { WithSwapi } from './HOC/SwapiHOC';
import SwapiPeople from './HOC/SwapiPeople';
import SwapiPlanets from './HOC/SwapiPlanets';

const ComponentWithSwapiNames = WithSwapi(SwapiPeople, 'people');
const ComponentWithSwapiPlanets = WithSwapi(SwapiPlanets, 'planets');

class App extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Compound Components</h1>
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

        <h1>Fragments</h1>
        <FragmentComponent />

        <h1>Context</h1>
        <Context />

        <h1>HOC</h1>
        <ComponentWithSwapiNames />
        <ComponentWithSwapiPlanets />

        <h1>Render Props</h1>
        <SharedComponent render={() => <span>hello!</span>} />
        <MouseTracker />
      </div>
    );
  }
}

export default App;
