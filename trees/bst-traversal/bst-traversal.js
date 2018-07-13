function inOrderTraverse(tree) {
  if(!tree) return [];
  return inOrderTraverse(tree.left).concat([tree.value]).concat(inOrderTraverse(tree.right));
}

function preOrderTraverse(tree) {
  if(!tree) return [];
	return [tree.value].concat(preOrderTraverse(tree.left)).concat(preOrderTraverse(tree.right));
}

function postOrderTraverse(tree) {
  if(!tree) return [];
	return postOrderTraverse(tree.left).concat(postOrderTraverse(tree.right)).concat([tree.value]);
}
