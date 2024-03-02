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
    if(this.root== null)return 0
    let depth = 1
    let toVisitStack=[this.root]
    while (toVisitStack.length){
      const newStack = []
      for (let node of toVisitStack){
        if (node.left == null && node.right == null){
          return depth
        }
        if (node.left){ newStack.push(node.left)}
        if(node.right){newStack.push(node.right)}
        toVisitStack.shift()
      }
      toVisitStack = newStack
      depth +=1
    }
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if(this.root== null)return 0
    let depth = 1
    let toVisitStack=[this.root]
    while (toVisitStack.length){
      const newStack = []
      for (let node of toVisitStack){
        if (node.left){newStack.push(node.left)}
        if(node.right){newStack.push(node.right)}
      }
      if (newStack.length == 0) return depth
      else{
      toVisitStack = newStack
      depth +=1}
    }
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum(current) {

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (this.root == null) return null
    const q = [this.root]
   let larger = null
    while (q.length > 0){
      const current = q.pop()
      if(current.left){q.push(current.left)}
      if(current.right){q.push(current.right)}
      if (current.val > lowerBound && larger == null)
      {larger = current.val}
      else if (current.val > lowerBound && current.val < larger){
        larger = current.val
      }
    }
    return larger

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {


  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
