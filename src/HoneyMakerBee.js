var HoneyMakerBee = function() {

  // call Bee super class
  Bee.call(this);

  // set age property to 10, instead of 5
  this.age = 10;

  // set job property to make honey, instead of keep growing
  this.job = 'make honey';

  // a honeyPot property equal to 0
  this.honeyPot = 0;

};

// Set the prototype
HoneyMakerBee.prototype = Object.create(Bee.prototype);

// Set the constructor
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

// This method adds 1 to that honeyBee's honeyPot
HoneyMakerBee.prototype.makeHoney = function () {
  this.honeyPot++;
};

// This method subtracts 1 from that honeyBee's honeyPot
HoneyMakerBee.prototype.giveHoney = function () {
  this.honeyPot--;
};