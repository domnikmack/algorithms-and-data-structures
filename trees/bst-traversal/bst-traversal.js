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

//Here with passing an array;

function inOrderTraverseArr(tree, array) {
  if(tree) {
		inOrderTraverseArr(tree.left, array);
		array.push(tree.value);
		inOrderTraverseArr(tree.right, array);
		return array;
	}
}

function preOrderTraverseArr(tree, array) {
  if(tree) {
		array.push(tree.value);
		preOrderTraverseArr(tree.left, array);
		preOrderTraverseArr(tree.right, array);
		return array;
	}
}

function postOrderTraverseArr(tree, array) {
  if(tree) {
		postOrderTraverseArr(tree.left, array);
		postOrderTraverseArr(tree.right, array);
		array.push(tree.value);
		return array;
	}
}
