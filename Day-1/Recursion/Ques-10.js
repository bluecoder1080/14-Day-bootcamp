//  Merge Two Sorted Lists using recursion

function mergeSortedArrays(a, b, i = 0, j = 0, result = []) {
  if (i === a.length) return result.concat(b.slice(j));
  if (j === b.length) return result.concat(a.slice(i));

  if (a[i] < b[j]) {
    result.push(a[i]);
    return mergeSortedArrays(a, b, i + 1, j, result);
  } else {
    result.push(b[j]);
    return mergeSortedArrays(a, b, i, j + 1, result);
  }
}

// Example:
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // [1,2,3,4,5,6]
