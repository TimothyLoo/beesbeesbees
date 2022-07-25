var ForagerBee = function() {
  // Call the super class Bee function
  Bee.call(this);

  // Set age property to 10
  this.age = 10;

  // set job property to find pollen
  this.job = 'find pollen';

  // set canFly property to true
  this.canFly = true;

  // set treasureChest property that's set to an empty array
  this.treasureChest = [];
};

// Set the prototype
ForagerBee.prototype = Object.create(Bee.prototype);

// Set the constructor
ForagerBee.prototype.constructor = ForagerBee;

// This method allows the bee to add a treasure to the treasureChest
ForagerBee.prototype.forage = function (treasure) {
  // I - some input

  // push treasure to treasureChest
  this.treasureChest.push(treasure);
};