const arr = [4, 7, 2, 1, 10, 9, 3];
const arr2 = [2, 6, 77, 8, 9, 10];

// split the array
// sort the left
// sort the right
// merge

const mergeSort = (arr) => {
  if (arr.length < 2) return arr;

  const middle = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, middle);
  const rightHalf = arr.slice(middle);

  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);

  const mergedArray = merge(sortedLeft, sortedRight);

  return mergedArray;
};

const merge = (leftHalf, rightHalf) => {
  const sorted = [];

  while (leftHalf.length && rightHalf.length) {
    if (leftHalf[0] < rightHalf[0]) {
      sorted.push(leftHalf.shift());
    } else {
      sorted.push(rightHalf.shift());
    }
  }

  return [...sorted, ...leftHalf, ...rightHalf];
};

console.log(merge(arr, arr2));
