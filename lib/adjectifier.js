const goodAdjs = [
  "nice",
  "kind",
  "sunny",
  "beautiful",
  "bright",
  "gooey",
  "delicious"
];

const evilAdjs = [
  "heinous",
  "smelly",
  "repugnant",
  "disgusting",
  "horrifying",
  "rancid",
  "disfigured"
];

function adjectifier(alignment) {
  let adjs = (alignment === 'good') ? goodAdjs : evilAdjs;
  return adjs[Math.floor(Math.random() * adjs.length)];
}

module.exports = adjectifier;
