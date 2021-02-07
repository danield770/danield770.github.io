// stack.js
class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }
  // Add element to top of stack
  push(element) {
    this.items[this.count] = element;
    console.log(`${element} added to ${this.count}`);
    this.count++;
    return this.count - 1;
  }
  // Return and remove top element instack
  // Return undefined if stack is empty
  pop() {
    if (this.isEmpty()) return;
    const deletedItem = this.items[this.count - 1];
    this.items[this.count - 1] = null;
    this.count--;
    console.log(`${deletedItem} popped`);
    return deletedItem;
  }
  // Check top element in stack
  peek() {
    if (this.isEmpty()) return;
    return this.items[this.count - 1];
  }
  // Check if stack is empty
  isEmpty() {
    console.log(this.count === 0 ? 'Stack is empty' : 'Stack is NOT empty');
    return this.count === 0;
  }

  // Check size of stack
  size() {
    console.log(`${this.count} elements in the stack`);
    return this.count;
  }

  // Print elements in the stack
  print() {
    let str = '';
    for (let i = 0; i < this.count; i++) {
      str += this.items[i] + ' ';
    }

    return console.log(str);
  }
  // Clear stack
  clear() {
    this.items = [];
    this.count = 0;
    console.log('Stack cleared');
    return this.items;
  }
}
const stack = new Stack();

stack.push(100);
stack.clear();
stack.push(200);
stack.push(300);
stack.print();
stack.size();

stack.pop();
stack.pop();
stack.pop();
console.log(stack.peek());
