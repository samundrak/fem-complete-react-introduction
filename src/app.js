/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import Hello from './components/Hello';

class App extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <HashRouter>
        <div className="app">
          <Route exact path="/hello" component={Hello} />
        </div>
      </HashRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
