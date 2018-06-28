function addOneToArrayNum(numArr) {
  let copy = numArr.slice();
  let i = copy.length - 1;
  let addend = 1;
  while ((copy[i] === 9 || addend) && i >= 0) {
    copy[i] += addend;
    addend = 0;
    if (copy[i] === 10) {
      copy[i] = 0;
      addend = 1;
    }
    i--;
  }
  if (addend) copy.unshift(1);
  return copy;
}

