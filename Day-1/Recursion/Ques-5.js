// . Count the Number of Zeros in a Number using Recursion


function countZeros(num) {
  num = Math.abs(num);
  if (num === 0) return 1; // special case
  if (num < 10) return 0;  // base case
  let last = num % 10;
  return (last === 0 ? 1 : 0) + countZeros(Math.floor(num / 10));
}

// Example:
console.log(countZeros(102030)); // 3
