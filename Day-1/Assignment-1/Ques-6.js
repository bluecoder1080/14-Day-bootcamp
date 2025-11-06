//  Convert a Decimal Number to Binary using Recursion

function decimalToBinary(n) {
  if (n === 0) return "0";
  if (n === 1) return "1";
  return decimalToBinary(Math.floor(n / 2)) + (n % 2);
}

// Example:
console.log(decimalToBinary(10)); // 1010
