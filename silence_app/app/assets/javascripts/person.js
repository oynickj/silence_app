function Person(options){
  this.gender = options.gender;
  this.hasLotion = false;
  this.isLotioned = true;
  this.lotion = {};
}

Person.prototype.take = function(lotion) {
  this.lotion = lotion;
  this.hasLotion = true;
};


Person.prototype.applyLotion = function() {
  this.lotion.squeeze();
  this.isLotioned = true;
};

Person.prototype.place = function(lotion, basket) {
  this.hasLotion = false;
  basket.contents.push(lotion);
};
