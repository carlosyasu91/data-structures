var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.queueSize = 0;
  this.storage = {};
  this.nextIn = 0;
  this.nextOut = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.nextIn] = value;
  this.nextIn++;
  this.queueSize++;
};

Queue.prototype.dequeue = function() {
  if (this.queueSize) {
    this.queueSize--;
    var dequeued = this.storage[this.nextOut];
    delete this.storage[this.nextOut];
    this.nextOut++;
    return dequeued;
  }
};

Queue.prototype.size = function() {
  return this.queueSize;
} 
