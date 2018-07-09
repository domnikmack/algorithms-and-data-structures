function checkPalindromeIterative(string) {
  let leftPointer = 0;
  let rightPointer = string.length - 1;
  while (leftPointer < rightPointer) {
    if (string[leftPointer] !== string[rightPointer]) return false;
    leftPointer++;
    rightPointer--;
  }
  return true;
}

function checkPalindromeRecursiveOne(string, left) {
  left = left || 0;
  let right = string.length -1 - left;
  if (left >= right) return true;
  if (string[left] !== string[right]) return false;
  else {
    return checkPalindromeRecursiveOne(string, left + 1);
  }
}

function checkPalindromeRecursiveTwo(string, left = 0) {
  let right = string.length - 1 - left;
  if (left >= right) return true;
  else return string[left] === string[right] && checkPalindromeRecursiveTwo(string, left + 1);
}
