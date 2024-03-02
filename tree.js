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
    if(!this.root) return 0
    let visitStack = [this.root]
    let sum = 0
    while(visitStack.length){
      let current = visitStack.shift()
      sum += current.val
      for (let child of current.children){
        visitStack.push(child)
      }
     
    }
    return sum
    
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if(!this.root) return 0
    let visitStack = [this.root]
    let evens = 0
    while(visitStack.length){
      let current = visitStack.shift()
      if(current.val%2==0)
      evens += 1
      for (let child of current.children){
        visitStack.push(child)
      }
     
    }
    return evens

  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {

   if(!this.root) return 0
    let visitStack = [this.root]
    let greater = 0
    while(visitStack.length){
      let current = visitStack.shift()
      if(current.val>lowerBound)
      greater += 1
      for (let child of current.children){
        visitStack.push(child)
      }
     
    }
    return greater
  }
}

module.exports = { Tree, TreeNode };
