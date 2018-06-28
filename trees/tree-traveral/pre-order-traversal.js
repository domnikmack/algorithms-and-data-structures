function recursivePreorderTraversal(root) {
  if (root === null) return [];
  return [root.val].concat(recursivePreorderTraversal(root.left)).concat(recursivePreorderTraversal(root.right));
}

var iterativePreorderTraversal = function(root) {
  if (root === null) return [];
  let nodesStack = [root];
  let vals = [];
  while (nodesStack.length) {
    let currentNode = nodesStack.pop();
    vals.push(currentNode.val);
    if (currentNode.right) nodesStack.push(currentNode.right);
    if (currentNode.left) nodesStack.push(currentNode.left);
  }
  return vals;
};
