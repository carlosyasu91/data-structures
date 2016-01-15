

// ------------------------
// Instantiate a new graph
var Graph = function() {
  this.vertices = {};
  this.nextKey = 0;
};

var Vertice = function(value, key){
  this.key = key;
  this.value = value;
  // this.edges = [];
  this.edges = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.findVertice = function(node) {
  for(var key in this.vertices){
    if(this.vertices[key].value === node){
      return this.vertices[key];
    }
  }
  return false;
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.vertices[this.nextKey] = new Vertice(node, this.nextKey);
  this.nextKey++;
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.findVertice(node) ? true : false;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var departingVertice = this.findVertice(node);
  delete this.vertices[departingVertice.key];
};

// ------------------------
// Returns a boolean  indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var from = this.findVertice(fromNode);
  var to = this.findVertice(toNode);
  return (from.edges[to.key]) ? true : false;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var from = this.findVertice(fromNode);
  var to = this.findVertice(toNode);
  from.edges[to.key] = true;
  to.edges[from.key] = true;
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var from = this.findVertice(fromNode);
  var to = this.findVertice(toNode);  
  delete from.edges[to.key];
  delete to.edges[from.key];
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.vertices) {
    cb(this.vertices[key].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
