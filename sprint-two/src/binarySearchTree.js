var BinarySearchTree = function(value, depth, parent) {
  
  var newBinarySearchTree = Object.create(BinarySearchTree.prototype);

  newBinarySearchTree.value = value;
  newBinarySearchTree.depth = depth || 0;
  if(parent) {
    newBinarySearchTree.parent = parent;
  }

  return newBinarySearchTree;
};

BinarySearchTree.prototype.insert = function(value){  
  if (value > this.value) {
    if(!this.right){
      this.right = BinarySearchTree(value, this.depth + 1, this);
    } else {
      this.right.insert(value);
    }
  } else {
    if(!this.left){
      this.left = BinarySearchTree(value, this.depth + 1, this);
    } else {
      this.left.insert(value);
    }  
  }
};

BinarySearchTree.prototype.contains = function(value){
  if (value === this.value) {
    return true;
  } else if (value > this.value && this.right) {
    return this.contains.call(this.right, value);
  } else if (value < this.value && this.right) {
    return this.contains.call(this.left, value);
  }
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(callback){
  callback.call(this, this.value);
  if(this.left) {
    this.depthFirstLog.call(this.left, callback);
  }
  if(this.right) {
    this.depthFirstLog.call(this.right, callback);
  }
};

BinarySearchTree.prototype.breadthFirstLog = function(callback, depth){

  var queue = [];

  this.depthFirstLog(function(value){
    queue[this.depth] = queue[this.depth] || [];
    queue[this.depth].push(value);
  });
  
  queue.forEach(function(depthArray){
    depthArray.forEach(function(value){
      callback(value);
    });
  });


};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// .depthFirst is linear O(n), but .insert and .contains are logarhythmic O(log n)