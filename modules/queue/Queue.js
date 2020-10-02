class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    // Set initial data.
    this.front = null;
    this.back = null;
  }

  isEmpty() {
    return !this.front;
  }

  enqueue(value) {
    // Add some data to the queue.
    // create a new node with value
    let node = new Node(value);

    // check if queue is empty
    if (this.isEmpty()) {
      // point front and back to new node
      this.front = this.back = node;
    } // else the queue is not empty
    else {
      // push node to back of the queue
      // by pointing the last node to the newly created node
      this.back.next = node;
      // move back pointer to the new node
      this.back = node;
    }
    this.all();
  }

  dequeue() {
    // Remove some data from the queue.
    // pointer to front of the queue
    let node = this.front;
    // if queue is not empty
    if (!this.isEmpty()) {
      // move to the next element
      this.front = this.front.next;
    }

    // check if front is null / past the end of the queue
    if (!this.front) {
      // set back to null
      this.back = null;
    }

    // print
    this.all();
    // return node at front of queue
    return node;
  }

  show() {
    // Return the next item in the queue.
    if (this.head === null) {
      return null;
    }
    console.log(this.front.value);
    return this.front.value;
  }

  all() {
    // Return all items in the queue.
    // If the queue is empty
    if (this.isEmpty()) {
      console.log('EMPTY QUEUE');
    }
    // Else it's not empty
    else {
      // temp array
      let tempArray = [];

      // temp variable to the front of the queue
      let temp = this.front;

      // iterate through the queue
      while (temp) {
        // add value into temp array
        tempArray.push(temp.value);
        // move to the next element
        temp = temp.next;
      }
      // print the value
      //console.log(tempArray.join(','));

      // return the value
      return tempArray;
    }
  }
}

module.exports = Queue;
