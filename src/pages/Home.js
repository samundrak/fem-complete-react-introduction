import React from 'react';
import { Row, Col } from 'react-bootstrap';
import propTypes from 'prop-types';
import VideoCard from '../components/VideoCard';

const Home = ({ videos }) => (
  <Row className="show-grid">
    { videos.map(video => (
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

Home.propTypes = {
  videos: propTypes.array, // eslint-disable-line
};
export default Home;
