const router = require('express').Router();

router.get('/', (req, res) => {
  const { title } = req.query;

  if (!title)
    res.status(400).json({
      status: 400,
      message: 'Request must have title query parameter',
    });
});

module.exports = router;
