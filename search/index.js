const router = require('express').Router();
const axios = require('axios');

const redisClient = require('../helper/redisHelper');

router.get('/', (req, res) => {
  const { title } = req.query;

  if (!title)
    return res.status(400).json({
      status: 400,
      message: 'Request must have title query parameter',
    });

  redisClient.get(title, async (err, data) => {
    if (data) {
      return res.status(200).json({
        status: 200,
        data: JSON.parse(data),
      });
    } else {
      const url = `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${title}`;

      try {
        const wikiSearch = await axios.get(url);

        redisClient.set(title, JSON.stringify(wikiSearch.data));

        return res.status(200).json({
          status: 200,
          data: wikiSearch.data,
        });
      } catch (err) {
        return res.status(404).json({
          status: 404,
          error: err,
        });
      }
    }
  });
});

module.exports = router;
