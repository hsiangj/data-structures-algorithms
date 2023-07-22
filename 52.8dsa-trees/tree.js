/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    //if the tree is empty, the sum is 0
    if(!this.root){
      return 0;
    }

    let sum = 0;
    const queue = [this.root];

    while (queue.length > 0){
      const node = queue.shift();
      sum += node.val;

      for(const child of node.children){
        queue.push(child);
      }
    }
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if(!this.root){
     return 0; 
    }

    let count = 0;
    const stack = [this.root];

    while(stack.length){
      const node = stack.pop();
      if(node.val % 2 === 0){
        count += 1;
      }

      for(let child of node.children){
        stack.push(child);
      }
    }
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if(!this.root){
      return 0;
    }

    let count = 0;
    const queue = [this.root];

    while(queue.length){
      const node = queue.shift();
      if(node.val > lowerBound){
        count += 1;
      }

      for(let child of node.children){
        queue.push(child);
      }
    }
    return count;
  }
}

module.exports = { Tree, TreeNode };

const tree = new Tree(
  new TreeNode(1, [
    new TreeNode(2),
    new TreeNode(3, [new TreeNode(4), new TreeNode(5)]),
    new TreeNode(6),
  ])
);

// console.log(tree)
console.log(tree.sumValues())
console.log(tree.countEvens())
