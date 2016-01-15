var BinarySearchTree = function(value) {
  
  var newBinarySearchTree = Object.create(BinarySearchTree.prototype);

  newBinarySearchTree.value = value;
  newBinarySearchTree.left = null;
  newBinarySearchTree.right = null;

  return newBinarySearchTree;
};

BinarySearchTree.prototype.insert = function(value){

};

BinarySearchTree.prototype.contains = function(value){

};

BinarySearchTree.prototype.depthFirstLog = function(callback){

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
