function bubbleSort(array) {
	let isSorted = false;
	let k = 1;
	while (!isSorted) {
		isSorted = true;
		for (let i = 0; i < array.length - k; i++) {
		  if (array[i] > array[i + 1]) {
				[array[i], array[i + 1]] = [array[i + 1], array[i]];
			  isSorted = false;
			}
		}
		k++;
	}
  return array;
}
