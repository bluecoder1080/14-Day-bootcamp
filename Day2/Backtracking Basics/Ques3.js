// . Letter Combinations of a Phone Number (LeetCode – 17)

function letterCombinations(digits) {
  if (!digits.length) return [];

  const map = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
  };

  let result = [];

  function backtrack(index, path) {
    if (index === digits.length) {
      result.push(path);
      return;
    }

    let letters = map[digits[index]];
    for (let i = 0; i < letters.length; i++) {
      backtrack(index + 1, path + letters[i]);
    }
  }

  backtrack(0, "");
  return result;
}

// Example
console.log(letterCombinations("23"));
// Output: [ 'ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf' ]
