import React from 'react';
import { Row, Col } from 'react-bootstrap';
import VideoCard from '../components/VideoCard';

const Home = () => (
  <Row className="show-grid">
    <Col xs={6} md={3}>
      <VideoCard />
    </Col>
    <Col xs={6} md={3}>
      <VideoCard />
    </Col>
    <Col xs={6} md={3}>
      <VideoCard />
    </Col>
    <Col xs={6} md={3}>
      <VideoCard />
    </Col>
  </Row>
);

export default Home;
