const express = require('express');
const router = express.Router();

// Define your routes
router.get('/', (req, res) => {
  res.render('pages/about', { title: 'About' });
});

module.exports = router;