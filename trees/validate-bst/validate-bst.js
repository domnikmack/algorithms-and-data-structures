function validateBst(tree, minVal = -Infinity, maxVal = Infinity) {
	if(!tree) return true;
	if(tree.value >= maxVal || tree.value < minVal) return false;
	return validateBst(tree.left, minVal, Math.min(maxVal, tree.value)) &&
			validateBst(tree.right, Math.max(minVal, tree.value), maxVal);
}

