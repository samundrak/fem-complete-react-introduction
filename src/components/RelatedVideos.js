import React from 'react';
import { Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import VideoCard from '../components/VideoCard';

const RelatedVideos = ({ videos }) => (
  <div>
    {videos.map(video => (
      <Row key={video.id.videoId}>
        <VideoCard
          videoId={video.id.videoId}
          thumbnail={video.snippet.thumbnails.medium.url}
          title={video.snippet.title}
          description={video.snippet.description}
          publishedAt={video.snippet.publishedAt}
          channelTitle={video.snippet.channelTitle}
        />
      </Row>
    ))}
  </div>
);

RelatedVideos.propTypes = {
  videos: PropTypes.array.isRequired,
};
export default RelatedVideos;
