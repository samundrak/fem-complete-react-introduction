const YoutubeNode = require('youtube-node');

class Youtube {

  constructor() {
    this.yt = new YoutubeNode();
    this.yt.setKey(global.config.youtubeKey);
  }


  search(req, res) {
    this.yt.search(req.query.q, req.query.perPage || 10, (error, result) => {
      if (error) {
        return res.status(500);
      }

      return res.json(result);
    });
  }
}


module.exports = Youtube;
