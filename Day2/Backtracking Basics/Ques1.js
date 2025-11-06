// 1. Print N-bit Binary Numbers having more 1s than 0s

function generateBinary(n, one = 0, zero = 0, output = "", result = []) {
  if (output.length === n) {
    result.push(output);
    return;
  }


  generateBinary(n, one + 1, zero, output + "1", result);

  if (one > zero) {
    generateBinary(n, one, zero + 1, output + "0", result);
  }

  return result;
}


console.log(generateBinary(3)); 
// Output: [ '111', '110', '101' ]
