import React from 'react';
import { Col } from 'react-bootstrap';
import Proptypes from 'prop-types';

const VideoStatistics = ({ likes, views, dislikes }) => (
  <div>
    <Col xs={6} md={4}>
      Views: { parseFloat(views).toLocaleString()}
    </Col>
    <Col xs={6} md={4}>
      Likes: {parseFloat(likes).toLocaleString()}
    </Col>
    <Col xsHidden md={4}>
      Dislikes: {parseFloat(dislikes).toLocaleString()}
    </Col>
  </div>
);

VideoStatistics.propTypes = {
  likes: Proptypes.string.isRequired,
  views: Proptypes.string.isRequired,
  dislikes: Proptypes.string.isRequired,
};

export default VideoStatistics;
