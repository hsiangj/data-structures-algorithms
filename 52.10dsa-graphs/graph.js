class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for (let vertex of vertexArray) {
      this.addVertex(vertex);
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    for (let neighbor of vertex.adjacent){
      this.removeEdge(vertex, neighbor)
    }
    this.nodes.delete(vertex);
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    let toVisitStack = [start];
    let seen = new Set(toVisitStack);
    let result = [];

    while (toVisitStack.length > 0) {
      let currVertex = toVisitStack.pop();
      result.push(currVertex.value);
      for (let neighbor of currVertex.adjacent) {
        if (!seen.has(neighbor)) {
          toVisitStack.push(neighbor);
          seen.add(neighbor)
        }
      }
    }
    return result;
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    let toVisitQueue = [start];
    let seen = new Set(toVisitQueue);
    let result = [];

    while (toVisitQueue.length > 0) {
      let currVertex = toVisitQueue.shift();
      result.push(currVertex.value);
      for (let neighbor of currVertex.adjacent) {
        if (!seen.has(neighbor)) {
          seen.add(neighbor);
          toVisitQueue.push(neighbor);
        }
      }
    }
    return result;
  }

  areConnectedRecursive(person1, person2, seen=new Set([person1])) {
    if (person1 === person2) return true;
  
    for (let neighbor of person1.adjacent) {
      if (!seen.has(neighbor)) {
        seen.add(neighbor);
        if(this.areConnectedRecursive(neighbor, person2, seen)){
         
          return true;
        }
      }
    }
 
    return false;
  }
}

module.exports = {Graph, Node}

let harry = new Node('harry');
let hermione = new Node('hermione');
let ron = new Node('ron')
let voldy = new Node('voldy')

let friends = new Graph();
friends.addVertices([harry, hermione, ron, voldy]);
friends.addEdge(harry, hermione);
friends.addEdge(harry, ron);
friends.addEdge(hermione, ron);
console.log(friends.areConnectedRecursive(harry, voldy));
