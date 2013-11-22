function Lotion(options){
  this.brand = options.brand;
  this.ounces = options.ounces;
}

Lotion.prototype.squeeze = function() {
  this.ounces--;
};
