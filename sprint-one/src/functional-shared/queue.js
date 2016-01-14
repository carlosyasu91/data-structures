var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};

  newQueue.queueSize = 0;
  newQueue.nextIn = 0;
  newQueue.nextOut = 0;
  newQueue.storage= {};

  _.extend(newQueue, queueMethods);

  return newQueue;
};


var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.nextIn] = value;
  this.nextIn++;
  this.queueSize++;
};
queueMethods.dequeue = function(){
  if(this.queueSize){
    this.queueSize--;
    var dequeued = this.storage[this.nextOut];
    delete this.storage[this.nextOut];
    this.nextOut++;
    return dequeued;
  }
};

queueMethods.size = function(){
  return this.queueSize;
};

