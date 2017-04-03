var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let settings, imageSize;
  if (req.cookies.settings) {
    settings = JSON.parse(req.cookies.settings);
    imageSize = settings.insanity * 50;
  }
  res.render('index', { settings, imageSize });
});

router.post('/', (req, res) => {

  let settings;
  if (req.cookies.settings) {
    settings = JSON.parse(req.cookies.settings);
    //check against the form
    checkValues(req.body, settings);
  } else {
    settings = req.body;
  }

    //if previously set, don't overwrite the cookies
  function checkValues(postData, cookies) {
    //Will replace each setting from the form if the form is filled out
    Object.keys(postData).forEach((element, index, arr) => {
      //check if post data was filled out
      if (postData[element]) {
        settings[element] = postData[element];
      } else {
        //If no form data use old cookie value
        settings[element] = cookies[element];
      }
    });
  }

  //if alignment is not set
  //check if cookie was previous set
  //if so, keep it
  //if not,
  //Handle unset cookie properties in the template or the post?

  res.cookie("settings", JSON.stringify(settings, null, 2));
  res.redirect('/');
});

module.exports = router;
