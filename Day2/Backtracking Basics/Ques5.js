// 5. 5. Letter Tile Possibilities (LeetCode – 1079)

function numTilePossibilities(tiles) {
  let result = new Set();
  let used = Array(tiles.length).fill(false);

  function backtrack(path) {
    if (path.length > 0) {
      result.add(path);
    }

    for (let i = 0; i < tiles.length; i++) {
      if (used[i]) continue;
      used[i] = true;
      backtrack(path + tiles[i]);
      used[i] = false;
    }
  }

  backtrack("");
  return result.size;
}

// Example
console.log(numTilePossibilities("AAB")); 
// Output: 8
