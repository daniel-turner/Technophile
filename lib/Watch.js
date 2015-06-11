module.exports = Watch;

function Watch() {

  this.bodyPart = null;

  this.wear = function(bodyPart) {

    this.bodyPart = bodyPart;
  };
};

