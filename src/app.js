/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Video from './pages/Video';
import Header from './components/Header';
import { getDefaultVideos } from './api/calls';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      videos: [],
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
        <div className="app">
          <Header title="Home" />
          <div className="container">
            <div className="row">
              <Route exact path="/" component={() => <Home videos={this.state.videos} />} />
              <Route
                exact path="/video/:videoId"
                component={props => <Video video={this.getVideoDetails(props.match.params.id)} />}
              />
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
