import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Jumbotron } from 'react-bootstrap';
import { getRelatedVideos, getVideoDetails } from '../api/calls';
import VideoStatistics from '../components/VideoStatistics';
import RelatedVideos from '../components/RelatedVideos';

class Video extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      video: {},
      related: [],
      initialLoad: false,
    };
  }

  componentWillMount() {
    this.loadDetails(this.props.match.params.videoId);
    this.setState({
      initialLoad: true,
    });
  }

  componentWillReceiveProps(props) {
    if (!this.state.initialLoad) {
      return false;
    }

    this.loadDetails(props.match.params.videoId);
    return true;
  }

  loadDetails(videoId) {
    getVideoDetails(videoId)
      .then((response) => {
        this.setState({
          video: response.data.items[0],
        });
      });
    getRelatedVideos(videoId)
      .then((response) => {
        this.setState({
          related: response.data.items,
        });
      });
  }

  render() {
    if (!this.state.video.snippet) {
      return <div>Loading data...</div>;
    }
    return (
      <Row className="show-grid">
        <Col sm={8}>
          <Row>
            { this.state.video.snippet.title }
          </Row>
          <Row>
            <Jumbotron>
              <iframe
                width="500px"
                height="350px"
                src={`https://www.youtube.com/embed/${this.state.video.id}?autoplay=1`}
              />
              <VideoStatistics
                views={this.state.video.statistics.viewCount}
                likes={this.state.video.statistics.likeCount}
                dislikes={this.state.video.statistics.dislikeCount}
              />
            </Jumbotron>
          </Row>
        </Col>
        <Col sm={4}>
          <RelatedVideos videos={this.state.related} />
        </Col>
      </Row>
    );
  }
}

Video.propTypes = {
  match: PropTypes.object.isRequired,
};
export default Video;
