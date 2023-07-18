/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  _get(idx) {
    let currentNode = this.head;
    let position = 0;

    while (currentNode !== null && position !== idx) {
      position += 1;
      currentNode = currentNode.next;
    }
    return currentNode
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
   
    this.length += 1
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if(this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1
  }

  /** pop(): return & remove last item. */

  pop() {
    return this.removeAt(this.length-1);
  }

  /** shift(): return & remove first item. */

  shift() {
    return this.removeAt(0);
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error('Invalid index');
    }

    return this._get(idx).val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx >= this.length || idx < 0) {
      throw new Error('Invalid index');
    }

    let currentVal = this._get(idx);
    currentVal.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx > this.length || idx < 0) {
      throw new Error('Invalid index');
    }

    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);

    let prevNode = this._get(idx - 1);
    let newNode = new Node(val);
    newNode.next = prevNode.next;
    prevNode.next = newNode;

    this.length += 1;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx >= this. length || idx < 0) {
      throw new Error('Invalid index');
    }

    // remove first item
    if (idx === 0) {
      let currentNode = this.head;
      this.head = currentNode.next;
      this.length -= 1;
      if (this.length <= 1) this.tail = this.head;
      return currentNode.val; 
    }

    let prevNode = this._get(idx - 1);

    // remove last item
    if (idx === this.length - 1) {
      let currentNode = this.tail;
      prevNode.next = null;
      this.tail = prevNode;
      this.length -= 1;
      return currentNode.val;
    }

    // remove middle
    let currentNode = this._get(idx);
    prevNode.next = currentNode.next;
    this.length -= 1;
    return currentNode.val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;

    let current = this.head;
    let total = 0;
    while (current) {
      total += current.val;
      current = current.next;
    }

    return total/this.length;
  }
}

module.exports = LinkedList;

console.log('test code')
let ll = new LinkedList(vals=['one','two','three']);
ll.unshift('zero')
ll.insertAt(4, 'five')
console.log(ll)
// console.log(ll.getAt(0))
// console.log(`vals: ${vals}`)