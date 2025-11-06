// Ques - Write a recursive function that takes an integer as input and returns the total number of digits
function countDigits(num) {
  num = Math.abs(num); // handle negative numbers
  if (num < 10) return 1; // base case
  return 1 + countDigits(Math.floor(num / 10)); // recursive case
}

// Example:
console.log(countDigits(12345)); // 5

