function Person(options){
  this.gender = options.gender;
  this.isLotioned = true;
  this.lotion = null;
}

Person.prototype.take = function(lotion) {
  this.lotion = lotion;
};

Person.prototype.hasLotion = function() {
  if (this.lotion) {
    return true;
  } else {
    return false;
  }
};

Person.prototype.applyLotion = function() {
  this.lotion.squeeze();
  this.isLotioned = true;
};

Person.prototype.place = function(lotion, basket) {
  basket.contents.push(lotion);
  this.lotion = null;
};
