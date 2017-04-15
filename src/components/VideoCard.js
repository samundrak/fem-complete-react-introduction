import React from 'react';
import 'styles/card.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const VideoCard = ({ videoId, title, description, publishedAt, thumbnail, channelTitle }) => (
  <div className="card">
    <img
      alt="images" className="card-img-top"
      src={thumbnail}
    />
    <Link to={`/video/${videoId}`}>
      <div className="card-block">
        <h4 className="card-title">{title}</h4>
        <div className="card-text">
          {description}
        </div>
      </div>
    </Link>
    <div className="card-footer">
      <span className="float-right">{publishedAt}</span>
      <br />
      <span>{channelTitle}</span>
    </div>
  </div>
);

VideoCard.propTypes = {
  videoId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  channelTitle: PropTypes.string.isRequired,
};
export default VideoCard;
