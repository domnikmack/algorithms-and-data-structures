function findThreeHighestNumbers(array) {
	let maxNums = new Array(3).fill(-Infinity);
  for (let i = 0; i < array.length; i++) {
		if (array[i] > maxNums[2]) {
			update(maxNums, array[i], 2);
		} else if (array[i] > maxNums[1]) {
			update(maxNums, array[i], 1);
		} else if (array[i] > maxNums[0]) {
			update(maxNums, array[i], 0);
		}
	}
	return maxNums;
}

function update(arr, val, index) {
	for (let j = 0; j <= index; j++) {
	  if (j === index) {
			arr[j] = val;
		} else {
			arr[j] = arr[j + 1];
		}
	}
}

