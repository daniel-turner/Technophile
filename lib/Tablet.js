module.exports = Tablet;

function Tablet() {

  this.touch = function(inX,inY) {

    return {
      x : inX,
      y : inY
    };
  };

};

