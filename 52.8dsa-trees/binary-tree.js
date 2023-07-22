/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if(!this.root){
      return 0;
    }
    let depth = 1;
    const queue = [this.root];

    while(queue.length > 0){
      const levelSize = queue.length;

      for(let i=0; i<levelSize; i++){
        const node = queue.shift();

        if(!node.left && !node.right){
          return depth;
        }
        if(node.left){
          queue.push(node.left);
        }
        if(node.right){
          queue.push(node.right);
        }
      }
      depth++;
    }
    return depth;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if(!this.root){
      return 0;
    }
    let depth = 1;
    const stack = [this.root];

    while(stack.length > 0){
      const levelSize = stack.length;
    
      for(let i=0; i<levelSize; i++){
        const node = stack.pop();

        if(node.left || node.right){
          depth++;
        }

        if(node.left){
          stack.push(node.left);
        }

        if(node.right){
          stack.push(node.right);
        }
      }
      
    }
    return depth;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
   let result = 0;

   function maxSumHelper(node) {
    if(!node) return 0;
    const leftSum = maxSumHelper(node.left);
    const rightSum = maxSumHelper(node.right);
    result = Math.max(result, node.val + leftSum + rightSum);
    return Math.max(leftSum + node.val, rightSum + node.val);
   }
   maxSumHelper(this.root);
   return result;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if(!this.root) return null;

    let closest = null;
    let queue = [this.root];

    while(queue.length){
      let currNode = queue.shift();
      let currVal = currNode.val;
      let largerThanLowerBound = currVal > lowerBound;
      let updateClosest = currVal < closest || closest === null;

      if(largerThanLowerBound && updateClosest){
        closest = currVal;
      }
  
      if(currNode.left) queue.push(currNode.left);
      if(currNode.right) queue.push(currNode.right);
    }

    return closest;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  // areCousins(node1, node2) {

  // }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  // static serialize() {

  // }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  // static deserialize() {

  // }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  // lowestCommonAncestor(node1, node2) {
    
  // }
}

module.exports = { BinaryTree, BinaryTreeNode };


const tree = new BinaryTree(
  new BinaryTreeNode(6, 
    new BinaryTreeNode(5, new BinaryTreeNode(4), new BinaryTreeNode(1)),
    new BinaryTreeNode(5)
  )
);

console.log(tree.maxSum()); 