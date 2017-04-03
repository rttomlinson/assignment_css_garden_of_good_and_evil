const adjectifier = require('./adjectifier');

function reqAdjectifier(req, res, next) {
  const settings = JSON.parse(req.cookies.settings);
  if (settings) {
    const alignment = req.cookies.settings.alignment;
    const adjective = adjectifier(alignment);
    settings.adjective = adjective;
    res.cookie("settings", JSON.stringify(settings, null))
  }
  next();
}

module.exports = reqAdjectifier;
