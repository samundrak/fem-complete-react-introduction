import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import VideoCard from '../components/VideoCard';
import { searchVideos } from '../store/actions';

class Home extends React.Component {
  componentDidMount() {
    if (!this.props.videos.length) {
      this.props.dispatch(searchVideos('new nepali movies'));
    }
  }

  render() {
    return (
      <Row className="show-grid">
        { this.props.videos.map(video => (
          <Col xs={6} md={3} key={video.id.videoId}>
            <VideoCard
              videoId={video.id.videoId}
              thumbnail={video.snippet.thumbnails.medium.url}
              title={video.snippet.title}
              description={video.snippet.description}
              publishedAt={video.snippet.publishedAt}
              channelTitle={video.snippet.channelTitle}
            />
          </Col>
        ))}
      </Row>
    );
  }
}

Home.propTypes = {
  videos: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  videos: state.videos,
});
export default connect(mapStateToProps)(Home);
