// see https://algodaily.com/challenges/design-a-least-recently-used-lru-cache

class Cache {
  constructor(capacity) {
    this.count = 0;
    this.capacity = capacity;
    this.cache = {};
    this.head = new DLinkedNode();
    this.head.pre = null;
    this.tail = new DLinkedNode();
    this.tail.next = null;
    this.head.next = this.tail;
    this.tail.pre = this.head;
  }

  get(key) {
    const node = this.cache[key];
    if (!node) {
      return -1;
    }
    this.moveToHead(node);
    return node.val;
  }

  put(key, value) {
    const node = this.cache[key];
    if (!node) {
      const newNode = new DLinkedNode(key, value, null, null);
      this.cache[key] = newNode;
      this.addNode(newNode);
      this.count++;
      if (this.count > this.capacity) {
        const tail = this.popTail();
        delete this.cache[tail.key];
        this.count--;
      }
    } else {
      node.val = value;
      this.moveToHead(node);
    }
  }

  addNode(node) {
    node.pre = this.head;
    node.next = this.head.next;
    this.head.next.pre = node;
    this.head.next = node;
  }

  removeNode(node) {
    const pre = node.pre;
    const next = node.next;
    pre.next = next;
    next.pre = pre;
  }

  moveToHead(node) {
    this.removeNode(node);
    this.addNode(node);
  }

  popTail(node) {
    const pre = this.tail.pre;
    this.removeNode(pre);
    return pre;
  }
}

class DLinkedNode {
  constructor(key, val, pre, next) {
    this.key = key;
    this.val = val;
    this.pre = pre;
    this.next = next;
  }
}

// initialize with a capacity of 3 keys
const cache = new Cache(3);
cache.put(1, 1);
cache.put(2, 4);
cache.put(3, 9);
console.log(cache.get(1)); // returns 1
cache.put(4, 16); // evicts key 2
console.log(cache.get(2)); // returns -1
