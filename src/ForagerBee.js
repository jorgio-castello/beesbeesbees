var ForagerBee = function(age, color, job, canFly = true) {
  Bee.call(this, age || 10, color, job || 'find pollen');
  this.canFly = canFly;
  this.treasureChest = [];
};

ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.forage = function(treasure) {
  this.treasureChest.push(treasure);
}
ForagerBee.prototype.constructor = ForagerBee;