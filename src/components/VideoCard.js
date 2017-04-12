import React from 'react';
//import 'styles/card.css';

const VideoCard = () => (
  <div className="card">
    <img
      alt="images" className="card-img-top"
      src="http://success-at-work.com/wp-content/uploads/2015/04/free-stock-photos.gif"
    />
    <div className="card-block">
      <h4 className="card-title">Tawshif Ahsan Khan</h4>
      <div className="meta">
        <a href="/">Friends</a>
      </div>
      <div className="card-text">
        Tawshif is a web designer living in Bangladesh.
      </div>
    </div>
    <div className="card-footer">
      <span className="float-right">Joined in 2013</span>
      <span><i className="" />75 Friends</span>
    </div>
  </div>
);

export default VideoCard;
