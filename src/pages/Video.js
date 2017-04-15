import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Jumbotron } from 'react-bootstrap';

const Video = ({ video }) => {
  if (!video.snippet) {
    return <div>Loading data...</div>;
  }
  return (
    <Row>
      <Col sm={8}>
        <Row>
          <h3 className="active">{video.snippet.title}</h3>
        </Row>
        <Row>
          <Jumbotron>
            <h1>Hello, world!</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style
              component for calling extra attention to featured
              content or information.</p>
          </Jumbotron>
        </Row>
      </Col>
      <Col sm={4}>k cha</Col>
    </Row>
  );
};

Video.propTypes = {
  video: PropTypes.object.isRequired,
};

export default Video;
