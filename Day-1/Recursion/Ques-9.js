//  Reverse an Array using recursion


function reverseArray(arr, start = 0, end = arr.length - 1) {
  if (start >= end) return arr;
  [arr[start], arr[end]] = [arr[end], arr[start]]; // swap
  return reverseArray(arr, start + 1, end - 1);
}

// Example:
console.log(reverseArray([1, 2, 3, 4, 5])); // [5,4,3,2,1]
