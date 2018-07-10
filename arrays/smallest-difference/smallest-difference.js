function smallestDifference(a, b) {
  a.sort((m, n) => m - n);
  b.sort((m, n) => m - n);
  let solution = [];
  let smallestDiff = Infinity;
  let idxA = 0;
  let idxB = 0;
  while (idxA < a.length && idxB < b.length) {
    if (a[idxA] === b[idxB]) {
      return [a[idxA], b[idxB]];
    }
    let difference = Math.abs(a[idxA] - b[idxB]);
    if (difference < smallestDiff) {
      smallestDiff = difference;
      solution = [a[idxA], b[idxB]];
    }
    if (a[idxA] < b[idxB]) {
      idxA++
    } else {
      idxB++
    }
	}
  return solution;
}
