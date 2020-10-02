class _Node {
  constructor(value) {
    this.value=value;
    this.next=null;
  }
}

class Stack {
  constructor() {
    this.top=null;
  }

  push(data) {
    /* If the stack is empty, then the node will be the
       top of the stack */
    if(this.top===null) {
      this.top=new _Node(data, null);
      return this.top;
    }

    /* If the stack already has something,
       then create a new node,
       add data to the new node, and
       have the pointer point to the top */
    const node=new _Node(data, this.top);
    this.top=node;
  }
  pop() {
    /* In order to remove the top of the stack, you have to point
       the pointer to the next item and that next item becomes the
       top of the stack */
    const node=this.top;
    this.top=node.next;
    return node.data;
  }
}




const store=require('../../store')


function createDogStack() {
  const dogs=store.dogs;
  const dogStack=new Stack;
  dogs.forEach(dog => {
    return dogStack.push(dog)

  });
}


console.log(createDogStack())
//console.log(store.dogs)
