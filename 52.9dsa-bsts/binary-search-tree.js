class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);
    if(!this.root) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;
    while (currentNode) {
      if (val < currentNode.val) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      } 
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }

    if (val < current.val) {
      if (current.left === null) {
        current.left = new Node(val);
        return this;
      }
      return this.insertRecursively(val, current.left);
    } else {
      if (current.right === null) {
        current.right = new Node(val);
        return this;
      }
      return this.insertRecursively(val, current.right);
    }
    
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currentNode = this.root;

    while (currentNode) {
      if (currentNode.val === val) {
        return currentNode;
      } else if (val < currentNode.val) {
        currentNode = currentNode.left
      } else{
        currentNode = currentNode.right;
      } 
    }
      return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if (!this.root) return undefined;

    if (val < current.val) {
      if (current.left === null) return undefined;
      return this.findRecursively(val, current.left);
    } else if (val > current.val) {
      if (current.right === null) return undefined;
      return this.findRecursively(val, current.right);
    } else {
      return current;
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let result = [];
    let current = this.root;
    
    function traverse(node) {
      result.push(node.val); 
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(current);
    return result;
    
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let result = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      result.push(node.val);
      if (node.right) traverse(node.right);
    }
    
    traverse(current);
    return result;

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let result = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      result.push(node.val);
    }
    
    traverse(current);
    return result;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let result = []
    let queue = [this.root];

    while (queue.length) {
      let current = queue.shift();
      result.push(current.val);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right)
      }
    }
    return result;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
