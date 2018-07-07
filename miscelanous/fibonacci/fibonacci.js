function fibRecursive(n) {
  if (n === 1) return 0;
	if (n === 2) return 1;
	return fibRecursive(n - 1) + fibRecursive(n - 2);
}

function fibRecursiveWithMemoization(n, memoizeObj = { 1: 0, 2: 1 }) {
  if (n in memoizeObj) return memoizeObj[n];
  else {
    memoizeObj[n] = fibRecursiveWithMemoization(n - 1, memoizeObj) + fibRecursiveWithMemoization(n - 2, memoizeObj);
    return memoizeObj[n];
  }
}

function fibIterative(n) {
	let sum;
	let twoValsBefore = [0, 1];
	let position = 1;
	while (position <= n) {
		if (position === 1) sum = 0;
		else if (position === 2) sum = 1;
		else {
			sum = twoValsBefore[0] + twoValsBefore[1];
			twoValsBefore[0] = twoValsBefore[1];
			twoValsBefore[1] = sum;
		}
		position++;
	}
	return sum;
}
