function findClosestValueBstItrtv(tree, target) {
  let closest = tree.value;
	let currentNode = tree;
	while (currentNode) {
		if (currentNode.value === target) return currentNode.value;
    if (Math.abs(target - currentNode.value) < Math.abs(target - closest)) {
			closest = currentNode.value;
		}
		if (target < currentNode.value) {
			currentNode = currentNode.left;
		} else {
			currentNode = currentNode.right;
		}
	}
	return closest;
}

function findClosestValueBstRcrsv(tree, target, closest) {
	closest = closest || tree.value;
	if (!tree) return closest;
	if (Math.abs(tree.value - target) < Math.abs(closest - target)) {
		closest = tree.value
	}
	if (target < tree.value) {
		return findClosestValueBstRcrsv(tree.left, target, closest)
	} else if (target > tree.value) {
		return findClosestValueBstRcrsv(tree.right, target, closest)
	} else {
		return closest;
	}
}
