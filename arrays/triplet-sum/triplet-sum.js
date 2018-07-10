function tripletSum(arr, targetSum) {
  arr.sort((a, b) => a - b);
  let solution = [];
  for (let i = 0; i < arr.length - 2; i++) {
    let currentFirst = arr[i];
    let currentRemainder = targetSum - currentFirst;
    let leftIdx = i + 1;
    let rightIdx = arr.length - 1;
    while (leftIdx < rightIdx) {
      if (arr[leftIdx] + arr[rightIdx] === currentRemainder) {
        solution.push([currentFirst, arr[leftIdx], arr[rightIdx]]);
				leftIdx++;
				rightIdx--;
      } else if (arr[leftIdx] + arr[rightIdx] > currentRemainder) {
        rightIdx--;
      } else {
        leftIdx++;
      }
    }
  }
  return solution;
}
