class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
 }
    push(val){
      let newNode = new Node(val);
      if(this.head === null){
          this.head = newNode;
      }  
      else{
          while()
      }

 }

}

let first = new Node("Anna");
first.next = new Node("Dima");
first.next.next = new Node("Lora");
console.log(first);
