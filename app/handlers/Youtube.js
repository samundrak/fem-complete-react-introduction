const YoutubeNode = require('youtube-node');

class Youtube {

  constructor() {
    this.yt = new YoutubeNode();
    this.yt.setKey(global.config.youtubeKey);
  }


  search(req, res) {
    console.log(req.query.q);
    this.yt.search(req.query.q, req.query.perPage || 10, (error, result) => {
      if (error) {
        return res.status(500);
      }

      return res.json(result);
    });
  }

  show(req, res) {
    this.yt.getById(req.params.videoId, (error, result) => {
      if (error) {
        return res.status(500);
      }

      return res.json(result);
    });
  }

  related(req, res) {
    this.yt.related(req.params.videoId, 10, (error, result) => {
      if (error) {
        throw new Error('No related video found.');
      }

      return res.json(result);
    });
  }
}


module.exports = Youtube;
