/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Video from './pages/Video';
import Header from './components/Header';
import { getDefaultVideos, search } from './api/calls';

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

  handleSearch() {
    return (event) => {
      this.setState({ searchTerm: event.target.value });
    };
  }

  searchItem() {
    return () => {
      console.log(this);
      search({ q: this.state.searchTerm })
        .then((response) => {
          this.setState({ videos: response.data.items });
        });
    };
  }

  render() {
    return (
      <AppContainer>
        <BrowserRouter>
          <div className="app">
            <Header
              title="Home"
              handleSearch={this.handleSearch()}
              searchItem={this.searchItem()}
            />
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
        </BrowserRouter>
      </AppContainer>
    );
  }

}

ReactDOM.render(<App />, document.getElementById('app'));
