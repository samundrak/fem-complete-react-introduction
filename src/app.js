/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Header from './components/Header';

class App extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header title="Home" />
          <div className="container">
            <div className="row">
              <Route exact path="/" component={Home} />
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
