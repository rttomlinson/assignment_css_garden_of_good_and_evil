var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let settings;
  if (req.cookies.settings) settings = JSON.parse(req.cookies.settings);
  res.render('index', { settings });
});

router.post('/', (req, res) => {
  const { alignment, food, color, insanity } = req.body;
  const settings = { alignment, food, color, insanity };
  res.cookie("settings", JSON.stringify(settings, null, 2));
  res.redirect('/');
});

module.exports = router;
