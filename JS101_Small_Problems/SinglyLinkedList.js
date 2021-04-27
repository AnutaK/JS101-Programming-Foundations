class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(data) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(data) {
    let node = new Node(data);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      while (!this.head) {
        this.tail = node;
        this.tail.next = node;
      }
      this.length++;
    }
    return node;
  }
}

let first = new LinkedList();
first.push("anna");
