module.exports = SmartWatch;

var Watch = require('../lib/Watch');
var Tablet = require('../lib/Tablet');

function SmartWatch() {

  // extend(SmartWatch.prototype, Watch);

  // for(var i in Watch) {

  //   if(Watch.hasOwnProperty(i)) {

  //     SmartWatch.prototype[i] = Watch[i];
  //   }
  // }

  // for (var i in Tablet) {

  //   if(Tablet.hasOwnProperty(i)) {

  //     SmartWatch.prototype[i] = Tablet[i];
  //   }
  // }
// };

  Watch.call(this);
  Tablet.call(this);
};

// SmartWatch.prototype = Object.create(Watch.prototype, {

//   constructor: {

//     value: Watch
//   }
// });

extend(SmartWatch.prototype, Watch);
extend(SmartWatch.prototype, Tablet);

function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}