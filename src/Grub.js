var Grub = function(age, color) {
  this.age = age || 0;
  this.color = color || 'pink';
  this.food = 'jelly';
};

Grub.prototype.eat = function() {
  return 'Eat';
}

