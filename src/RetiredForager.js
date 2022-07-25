var RetiredForagerBee = function() {
  // Call ForagerBee super class
  ForagerBee.call(this);

  // Age property set to 40
  this.age = 40;

  // job property set to gamble
  this.job = 'gamble';

  // canFly property set to false
  this.canFly = false;

  // color property overwritten to grey
  this.color = 'grey';

};

// Set prototype
RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);

// Set constructor
RetiredForagerBee.prototype.constructor = RetiredForagerBee;

// This method returns a string
RetiredForagerBee.prototype.forage = function () {
  return 'I am too old, let me play cards instead';
};

// An always winning gamble method that allows the bee to add a treasure to the treasureChest
RetiredForagerBee.prototype.gamble = function (treasure) {
  this.treasureChest.push(treasure);
};