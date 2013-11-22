function Basket(options){
  this.material = options.material;
  this.contents = options.contents;
}

Basket.prototype.contains = function(object) {
  if (this.contents.indexOf(object) > -1) {
    return true;
  } else {
    return false;
  }
};
