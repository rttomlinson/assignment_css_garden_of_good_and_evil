const adjectifier = require('./adjectifier');

function reqAdjectifier(req, res, next) {
  if (req.cookies.settings) {
    let settings = JSON.parse(req.cookies.settings);
    const alignment = settings.alignment;
    console.log(`alignment is ${ alignment }`);
    const adjective = adjectifier(alignment);
    settings.adjective = adjective;
    req.cookies.settings = JSON.stringify(settings, null);
    //res.cookie("settings", JSON.stringify(settings, null))
  }
  next();
}

module.exports = reqAdjectifier;
