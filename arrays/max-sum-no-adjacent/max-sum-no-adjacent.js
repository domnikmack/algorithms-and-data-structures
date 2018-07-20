function maxSumNoAdjacent(array) {
	if (array.length < 1) return 0;
	if (array.length < 2) return array[0];
	let maxSums = [array[0], Math.max(array[0], array[1])];
	for (let i = 2; i < array.length; i++) {
		maxSums.push(Math.max(maxSums[i - 1], (maxSums[i - 2] + array[i])));
	}
	return maxSums.pop();
}
