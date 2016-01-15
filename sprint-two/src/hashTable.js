

var HashTable = function() {
  this._limit = 8;
  this._length = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var self = this;
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];
  var tuple = [k ,v];
  
  bucket.push(tuple);
  this._storage.set(index, bucket);
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
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var result;
  bucket.forEach(function(value){
    if(value[0] === k){
      result = value[1];
    }
  });
  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var result;
  bucket.forEach(function(value, i){
    if(value[0] === k){
      result = i;
    }
  });
  bucket.splice(result, 1);
  this.length--;
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


