var Queue = function() {
  var someInstance = {};
  var queueSize = 0;
  var nextIn = 0;
  var nextOut = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[nextIn] = value;
    nextIn++;
    queueSize++;
  };

  someInstance.dequeue = function() {
    if(queueSize){
      queueSize--;
      var dequeued = storage[nextOut];
      delete storage[nextOut];
      nextOut++;
      return dequeued;
    }
  };

  someInstance.size = function() {
    return queueSize;
  };

  return someInstance;
};
