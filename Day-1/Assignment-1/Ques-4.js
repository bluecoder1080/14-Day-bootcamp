// Check if a String contains only Digits using Recursion
function isAllDigits(str, i = 0) {
  if (i === str.length) return true; // base case
  if (str[i] < '0' || str[i] > '9') return false;
  return isAllDigits(str, i + 1);
}

// Example:
console.log(isAllDigits("12345")); // true
console.log(isAllDigits("12a45")); // false
