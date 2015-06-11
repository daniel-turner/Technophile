module.exports = SmartPhone;

var Phone = require('../lib/Phone');
var Tablet = require('../lib/Tablet');
var GameConsole = require('../lib/GameConsole');
var WebBrowser = require('../lib/WebBrowser');

function SmartPhone(phoneNumber) {

  Phone.call(this, phoneNumber);
  Tablet.call(this);
  GameConsole.call(this,"Smart Phone");
  WebBrowser.call(this);
};

extend(SmartPhone.prototype, Phone);
extend(SmartPhone.prototype, Tablet);
extend(SmartPhone.prototype, GameConsole);
extend(SmartPhone.prototype, WebBrowser);

function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}