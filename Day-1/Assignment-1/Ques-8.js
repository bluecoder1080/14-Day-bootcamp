//  Reverse a Linked List using recursion

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function reverseLinkedList(head) {
  if (!head || !head.next) return head; // base case
  let rest = reverseLinkedList(head.next);
  head.next.next = head;
  head.next = null;
  return rest;
}

// Example (manual creation)
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);

let reversed = reverseLinkedList(head);
while (reversed) {
  console.log(reversed.data);
  reversed = reversed.next;
}
