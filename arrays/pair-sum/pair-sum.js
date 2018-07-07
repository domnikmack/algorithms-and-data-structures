function pairSumLoops(array, targetSum) {
	for (let i = 0; i < array.length - 1; i++) {
		for (let j = i + 1; j < array.length; j++) {
		  if (array[i] + array[j] === targetSum) {
			  return [array[i], array[j]].sort((a, b) => a - b);
		  }
		}
	}
  return [];
}

function pairSumSortFirst(array, targetSum) {
	array.sort((a, b) => a - b);
	let left = 0;
	let right = array.length - 1;
	while (left < right) {
		let sum = array[left] + array[right];
		if (sum === targetSum) {
		  return [array[left], array[right]];
		} else if (sum < targetSum) left++;
		else right--;
	}
	return [];
}

function pairSumHashTable(array, targetSum) {
  let table = {};
	for (let i = 0; i < array.length; i++) {
		if (table[array[i]]) {
		  return [array[i], targetSum - array[i]].sort((a, b) => a - b);
		} else {
			table[targetSum - array[i]] = true;
		}
	}
	return [];
}
