const mod = 1e9 + 7;

function nCr(n, r, memo = {}) {
  if (r > n) return 0;
  if (r === 0 || r === n) return 1;
  let key = `${n},${r}`;
  if (memo[key]) return memo[key];
  let val = (nCr(n - 1, r - 1, memo) + nCr(n - 1, r, memo)) % mod;
  memo[key] = val;
  return val;
}

// Example
console.log(nCr(5, 2)); // Output: 10
