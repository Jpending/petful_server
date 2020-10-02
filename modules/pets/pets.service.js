<<<<<<< HEAD
const Queue = require('../queue/Queue');
const store = require('../../store');
=======
const Queue=require('../queue/Queue')
const store=require('../../store')
>>>>>>> e5fb8e46532ab669c881a7374d11a174ca2c8fc7

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue(),
};

store.cats.forEach((cat) => pets.cats.enqueue(cat));
store.dogs.forEach((dog) => pets.dogs.enqueue(dog));

// --------------------

module.exports = {
  get(type) {
    if (type === 'dogs') {
      return pets.dogs.all();
    }
    return pets.cats.all();
  },
  dequeue(type) {
<<<<<<< HEAD
    if (type === 'dogs') {
      return pets.dogs.dequeue();
    }
    return pets.cats.dequeue();
  },
};
=======
    if(type==='dogs') {return pets.dogs.dequeue()}
    return pets.cats.dequeue();
  }
}
>>>>>>> e5fb8e46532ab669c881a7374d11a174ca2c8fc7
