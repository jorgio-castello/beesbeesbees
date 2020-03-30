var Bee = function(age, color, job) {
  Grub.call(this, age || 5, color || 'yellow');
  this.job = job || 'keep on growing';
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;

