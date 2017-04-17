/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Video from './pages/Video';
import HeaderContainer from './containers/HeaderContainer';
import { getDefaultVideos } from './api/calls';
import store from './store';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      videos: [],
      searchTerm: '',
    };
  }

  componentDidMount() {
    getDefaultVideos()
      .then((response) => {
        this.setState({ videos: response.data.items });
      });
  }

  getVideoDetails(videoId) {
    let video = {};
    this.state.videos.forEach((item) => {
      if (item.id.videoId === videoId) {
        video = item;
      }
    });
    return video;
  }


  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className="app">
            <HeaderContainer />
            <div className="container">
              <div className="row">
                <Route
                  exact
                  path="/"
                  component={() => (
                    <Home
                      videos={this.state.videos}
                    />)}
                />
                <Route
                  exact path="/video/:videoId"
                  component={Video}
                />
              </div>
            </div>
          </div>
        </Provider>
      </BrowserRouter>
    );
  }

}

ReactDOM.render(<App />, document.getElementById('app'));
