function selectionSort(array) {
  let splitIdx = 0;
  while(splitIdx < array.length - 1) {
    let minIdx = splitIdx;
    for(let i = splitIdx + 1; i < array.length; i++) {
      if(array[i] < array[minIdx]) {
        minIdx = i;
      }
    }
    [array[splitIdx], array[minIdx]] = [array[minIdx], array[splitIdx]];
    splitIdx++;
  }
  return array;
}
