function maxSubsetSumAdj(array) {
  if (array.length < 1) return 0;
	if (array.length < 2) return array[0];
	let previous = array[0];
	let currentMax = Math.max(array[0], array[1]);
	let beforePrevious;
	for (let i = 2; i < array.length; i++) {
		beforePrevious = previous;
		previous = currentMax;
		currentMax = Math.max(previous, beforePrevious + array[i]);
	}
	return currentMax;
}
