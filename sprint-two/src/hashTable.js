

var HashTable = function() {
  this._limit = 8;
  this._length = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];
  
  var t = 0;
  while(bucket[t] && k !== bucket[t][0]){
    t++;
  }
  bucket[t] = [k ,v];
  
  this._storage.set(index, bucket);
  this._length++;

  if(this._length > this._limit * 0.75) {
    this.rehash(this._limit * 2);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if(!bucket) {
    return undefined;
  }

  var t = 0;
  while(bucket[t] && k !== bucket[t][0]){
    t++;
  }

  return (bucket[t]) ? bucket[t][1] : undefined; 
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  
  var t = 0;
  while(bucket[t] && k !== bucket[t][0]){
    t++;
  }
  bucket.splice(t, 1);
  this._length--;

  if(this._length < this._limit * 0.25) {
    this.rehash(this._limit / 2);
  }
};

HashTable.prototype.rehash = function(newLimit) {
  var currentTable = this._storage;
  var self = this;
  this._limit = newLimit;
  this._length = 0;
  this._storage = LimitedArray(this._limit);

  currentTable.each(function(bucket){
    if(!bucket) {
      return;
    }
    bucket.forEach(function(tuple){
      self.insert(tuple[0], tuple[1]);
    });
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

// At best, .insert, .retrieve and .remove are constant O(1) time, at worst, linear O(n)

