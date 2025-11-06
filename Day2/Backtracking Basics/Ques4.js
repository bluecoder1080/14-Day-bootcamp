//  4. Combinations (LeetCode – 77)

function combine(n, k) {
  let result = [];

  function backtrack(start, temp) {
    if (temp.length === k) {
      result.push([...temp]);
      return;
    }

    for (let i = start; i <= n; i++) {
      temp.push(i);
      backtrack(i + 1, temp);
      temp.pop(); // backtrack
    }
  }

  backtrack(1, []);
  return result;
}

// Example
console.log(combine(4, 2));
// Output: [ [ 1, 2 ], [ 1, 3 ], [ 1, 4 ], [ 2, 3 ], [ 2, 4 ], [ 3, 4 ] ]
