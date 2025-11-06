// . Delete Middle Element of a Stack using Recursion

function deleteMiddle(stack, current = 0, size = stack.length) {
 
  if (current === Math.floor(size / 2)) {
    stack.pop(); // remove middle
    return;
  }

 
  let top = stack.pop();

  deleteMiddle(stack, current + 1, size);


  stack.push(top);
}

// Example
let stack = [1, 2, 3, 4, 5];
deleteMiddle(stack);
console.log(stack); 
// Output: [1, 2, 4, 5]
