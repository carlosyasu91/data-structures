var Tree = function(value, parent) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = (parent || undefined);

  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value,this));
}; 

treeMethods.contains = function(target) {
  if(this.value === target) {
    return true;
  }
  for(var i=0; i < this.children.length; i++){
    if (this.children[i].contains(target)) return true;
  }
  return false;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// addChild is constant (O(1)), contains is linear (O(n))