var HoneyMakerBee = function() {
  Bee.call(this, 10, undefined, 'make honey');
  this.honeyPot = 0;
};

HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
}
HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot--;
}
HoneyMakerBee.prototype.constructor = HoneyMakerBee;