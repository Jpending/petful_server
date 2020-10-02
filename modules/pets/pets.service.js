const Queue=require('../queue/Queue')
const store=require('../../store')

// Set up initial data.
// --------------------

const pets={
  cats: new Queue(),
  dogs: new Queue()
}

store.cats.forEach(cat => pets.cats.enqueue(cat))
store.dogs.forEach(dog => pets.dogs.enqueue(dog))

// --------------------

module.exports={
  get(type) {
    if(type==='dogs') {return pets.dogs.all()}
    return pets.cats.all();

  },
  dequeue(type) {
    if(type==='dogs') {return pets.dogs.dequeue()}
    return pets.cats.dequeue();
  }
}
