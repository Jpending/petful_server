<<<<<<< HEAD
const Queue=require('../queue/Queue')
const store=require('../../store')
=======
const Queue = require('../queue/Queue');
const store = require('../../store');
>>>>>>> 273f1f038ee83cec0fc8ee35eb1397ee4d5bec35

// Set up initial data.
// --------------------

const pets={
  cats: new Queue(),
  dogs: new Queue(),
};

store.cats.forEach((cat) => pets.cats.enqueue(cat));
store.dogs.forEach((dog) => pets.dogs.enqueue(dog));

// --------------------

module.exports={
  get(type) {
    if(type==='dogs') {return pets.dogs.all()}
    return pets.cats.all();

  },
  dequeue(type) {
<<<<<<< HEAD
    if(type==='dogs') {return pets.dogs.dequeue()}
    return pets.cats.dequeue();
  }
}
=======
    // Remove a pet from the queue.
  },
};
>>>>>>> 273f1f038ee83cec0fc8ee35eb1397ee4d5bec35
