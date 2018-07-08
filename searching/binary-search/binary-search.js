function binarySearch(arr, target) {
  let leftIndex = 0;
	let rightIndex = arr.length - 1;
	while (leftIndex <= rightIndex) {
		let midPointIndex = Math.floor((leftIndex + leftIndex) / 2);
		if (arr[midPointIndex] === target) return midPointIndex;
	  if (target < arr[midPointIndex]) {
			rightIndex = midPointIndex - 1;
		} else {
			leftIndex = midPointIndex + 1;
		}
	}
	return -1;
}

function binarySearchRecursive(array, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) return -1;
  leftIndex = leftIndex || 0;
  rightIndex = rightIndex === undefined ? array.length - 1 : rightIndex;
  let midPointIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (array[midPointIndex] === target) return midPointIndex;
  if (target < array[midPointIndex]) {
    return binarySearchRecursive(array, target, leftIndex, midPointIndex - 1);
  } else {
    return binarySearchRecursive(array, target, midPointIndex + 1, rightIndex);
  }
}
