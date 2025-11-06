//  Check if an Array is Sorted (Strictly Increasing) using Recursion

function isSorted(arr, i = 0) {
  if (i === arr.length - 1) return true; // base case
  if (arr[i] >= arr[i + 1]) return false;
  return isSorted(arr, i + 1); // recursive case
}

// Example:
console.log(isSorted([1, 2, 3, 4, 5])); // true
console.log(isSorted([1, 3, 2])); // false
