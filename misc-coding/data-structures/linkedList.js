// linked list

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }
  // Insert last node
  insertLast(data) {
    let node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  // Insert at index
  insertAt(data, index) {
    if (index > this.size) {
      return;
    }
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    let current = this.head;
    let previous;
    let count = 0;
    const node = new Node(data);

    while(count < index) {
      previous = current;
      count++;
      current = current.next
    }
    previous.next = node;
    node.next = current;
    // let count = 1;
    // let current = this.head;
    // while (count < index) {
    //   current = current.next;
    //   count++;
    // }
    // let rest = current.next;
    // current.next = new Node(data, rest);
    this.size++;

  }
  // Get at index
  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        return console.log(current.data);
      }
      current = current.next;
      count++;
    }
    return null;
  }
  // Remove at index
  removeAt(index) {
    if (index < 0 || index > this.size) {
      return;
    }
    let current = this.head;
    let count = 0;
    let previous;
    if(index === 0) {
      this.head = current.next
    } else {
      while(count < index) {
        previous = current;
        count++;
        current = current.next
      }
      previous.next = current.next
    }
    this.size--
    // while (current) {
    //   if (count + 1 === index) {
      //     current.next = current.next.next;
    //     this.size--;
    //   }
    //   current = current.next;
    //   count++;
    // }
  }
  // Clear list
  clearList() {
    this.head = null;
    this.size = 0
  }
  // Print list data
  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
ll.insertAt(250, 2);
ll.getAt(2);
ll.getAt(0);
ll.getAt(10);
console.log('===');
console.log(ll.printListData());
console.log('===');
ll.removeAt(1);
console.log(ll.printListData());
console.log('===');
ll.clearList();
console.log(ll.printListData());

// console.log(ll.insertLast(400));
