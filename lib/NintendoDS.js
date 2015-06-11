

var GameConsole = require('./GameConsole.js');
var WebBrowser = require('./WebBrowser.js');

function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
};

extend(NintendoDS.prototype, GameConsole);
extend(NintendoDS.prototype, WebBrowser);

function NintendoDS() {

  GameConsole.call(this,"Nintendo DS");
  WebBrowser.call(this);
}


module.exports = NintendoDS;


