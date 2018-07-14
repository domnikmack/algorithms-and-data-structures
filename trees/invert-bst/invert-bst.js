function invertBinaryTreeIteratively(tree) {
  const nodes = [tree];
  while(nodes.length) {
    let currentNode = nodes.pop();
    [currentNode.left, currentNode.right] = [currentNode.right, currentNode.left];
    if (currentNode.left) nodes.push(currentNode.left);
    if (currentNode.right) nodes.push(currentNode.right);
  }
}

function invertBinaryTreeRecursively(tree) {
  if(tree) {
    [tree.left, tree.right] = [tree.right, tree.left];
    invertBinaryTreeRecursively(tree.left);
    invertBinaryTreeRecursively(tree.right);
  }
}
