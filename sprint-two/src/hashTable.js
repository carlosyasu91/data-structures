

var HashTable = function() {
  this._limit = 8;
  this._length = 0;
  this._storage = LimitedArray(this._limit);
  this._hash = getIndexBelowMaxForKey;
};

HashTable.prototype.insert = function(k, v) {
  var self = this;
  var index = this._hash(k, this._limit);
  this._storage.set(index, v);
  this._length++;
  // if(this._length > this._limit * 0.75) {
  //   this._limit *= 2;
  //   this._storage.each(function(el, i, storage){
  //     var newIndex = self._hash(i, self._limit);
  //     self._storage.set(newIndex, el);
  //   });
  // }
};

HashTable.prototype.retrieve = function(k) {
  var index = this._hash(k, this._limit);
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var self = this;
  var index = this._hash(k, this._limit);
  this._storage.set(index, undefined);
  this._length--;
  // if (this._length < this._limit * 0.25) {
  //   this._limit /= 2;
  //   this._storage.each(function(el, i, storage){
  //     var newIndex = self._hash(i, self._limit);
  //     self._storage.set(newIndex, el);
  //   });
  // }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


