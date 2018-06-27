function findSecondHighestValueBST(rootNode) {
  let currentNode = rootNode;
  let parentNode = null;
  while (currentNode.right) {
    parentNode = currentNode;
    currentNode = currentNode.right;
  }

  if (currentNode.left) {
    currentNode = currentNode.left;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.value;
  }
  return parentNode.value;
}
