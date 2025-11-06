// Ques-2 --> Find the Maximum Element in an Array using Recursion

function findMax(arr, n = arr.length) {
  if (n === 1) return arr[0]; // base case
  return Math.max(arr[n - 1], findMax(arr, n - 1)); // compare last element with rest
}

// Example:
console.log(findMax([2, 5, 1, 8, 3])); // 8
