// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.length = 0;
  }
  enqueue(value) {
    let myValue = new Node(value);

    if (this.length === 0) {
      this.front = myValue;
      this.back = myValue;
    } else {
      this.back.next = myValue;
      this.back = myValue;
    }

    this.length++;
    return this.length;
  }

  dequeue() {
    let head = this.front;
    let back = this.back;
    if (this.length === 0) {
      return null;
    }
    if (this.length == 1) {
      head = null;
      back = null;
    } else {
      this.front.next = head;
      this.back.next = back;
    }
    this.length--;
    return this.length.shift();
  }

  size() {
    if (!this.length) {
      return 0;
    } else if (this.length >= 2) {
      return 2;
    } else {
      return 1;
    }
  }
}
const test = new Queue();
test.enqueue("greg");
test.enqueue("samuel");
test.enqueue("tim");
console.log(test);
exports.Node = Node;
exports.Queue = Queue;
