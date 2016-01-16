var BinarySearchTree = function(value) {
  
  var newBinarySearchTree = Object.create(BinarySearchTree.prototype);

  newBinarySearchTree.value = value;
  newBinarySearchTree.left = null;
  newBinarySearchTree.right = null;

  return newBinarySearchTree;
};

BinarySearchTree.prototype.insert = function(value){  
  if (value > this.value) {
    if(!this.right){
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  } else {
    if(!this.left){
      this.left = BinarySearchTree(value);
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
  callback(this.value);
  if(this.left) {
    this.depthFirstLog.call(this.left, callback);
  }
  if(this.right) {
    this.depthFirstLog.call(this.right, callback);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// .depthFirst is linear O(n), but .insert and .contains are logarhythmic O(log n)