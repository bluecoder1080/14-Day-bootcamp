// . Reverse the Digits of a Number using Recursion
function reverseNumber(num, rev = 0) {
  if (num === 0) return rev;
  return reverseNumber(Math.floor(num / 10), rev * 10 + (num % 10));
}

// Example:
console.log(reverseNumber(1234)); // 4321
