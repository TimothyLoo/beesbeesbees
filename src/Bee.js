var Bee = function() {

  // Call super constructor
  Grub.call(this);

  // Set age property equal to 5, instead of 0
  this.age = 5;

  // Set color property to yellow, instead of pink
  this.color = 'yellow';

  // food should be inherited from grub

  // new job property that is set to keep on growing
  this.job = 'keep on growing';

};

// Subclass extends superclass
Bee.prototype = Object.create(Grub.prototype);

// If you don't set Bee.prototype.constructor to Bee,
// it will take the prototype.constructor of Grub (parent).
// To avoid that, we set the prototype.constructor to Bee (child).
Bee.prototype.constructor = Bee;

// Eat method is inherited from grub