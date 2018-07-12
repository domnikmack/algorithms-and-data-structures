class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    let currentNode = this;
    let isInserted = false;
    while (!isInserted) {
      let direction = null;
      if (value < currentNode.value) {
        direction = 'left';
      } else {
        direction = 'right';
      }
      if (!currentNode[direction]) {
        currentNode[direction] = new BST(value);
        isInserted = true;
      } else {
        currentNode = currentNode[direction];
      }
    }
  }

  contains(value) {
    let currentNode = this;
    while (currentNode) {
      if (value === currentNode.value) return true;
      if (value <= currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  remove(value, parentNode = null) {
    let currentNode = this;
    while (currentNode) {
      if (value === currentNode.value) {
        if (!currentNode.left && !currentNode.right) {
          if (parentNode) {
            let parentBranch =
              currentNode === parentNode.left ? 'left' : 'right';
            parentNode[parentBranch] = null;
            break;
          }
        } else if (currentNode.left && currentNode.right) {
          let minVal = currentNode.right.findMinVal();
          currentNode.value = minVal;
          currentNode.right.remove(minVal, currentNode);
          break;
        } else {
          let branch = currentNode.left ? 'left' : 'right';
          if (parentNode) {
            let parentBranch =
              currentNode === parentNode.left ? 'left' : 'right';
            parentNode[parentBranch] = currentNode[branch];
            break;
          } else {
            currentNode.value = currentNode[branch].value;
            if (branch === 'left') {
              currentNode.right = currentNode.left.right;
              currentNode.left = currentNode.left.left;
            } else {
              currentNode.left = currentNode.right.left;
              currentNode.right = currentNode.right.right;
            }
            break;
          }
        }
      } else if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else {
        parentNode = currentNode;
        currentNode = currentNode.right;
      }
    }
  }

  findMinVal() {
    let currentNode = this;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }

  getNodes() {
    let nodeVals = [];
    let nodes = [this];
    while (nodes.length) {
      let currentNode = nodes.pop();
      nodeVals.push(currentNode.value);
      if (currentNode.left) {
        nodes.push(currentNode.left);
      }
      if (currentNode.right) {
        nodes.push(currentNode.right);
      }
    }
    return nodeVals;
  }
}
