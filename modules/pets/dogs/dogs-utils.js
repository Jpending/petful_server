const store=require('../../../store')
const dogsInStore=store.dogs;
const Queue=require('../../queue/Queue')

const dogsQueue=new Queue;
dogsInStore.map(dog => dogsQueue.enqueue(dog))
console.log(dogsQueue.all())
