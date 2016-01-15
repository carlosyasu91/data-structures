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

};

BinarySearchTree.prototype.depthFirstLog = function(callback){

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
