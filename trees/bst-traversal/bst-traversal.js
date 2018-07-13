function inOrderTraversal(tree) {
  if(!tree) return [];
  return inOrderTraversal(tree.left).concat([tree.value]).concat(inOrderTraversal(tree.right));
}

function preOrderTraversal(tree) {
  if(!tree) return [];
	return [tree.value].concat(preOrderTraversal(tree.left)).concat(preOrderTraversal(tree.right));
}

function postOrderTraversal(tree) {
  if(!tree) return [];
	return postOrderTraversal(tree.left).concat(postOrderTraversal(tree.right)).concat([tree.value]);
}
