const express=require('express');
const json=require('body-parser').json();

const People=require('./people.service');

const router=express.Router();

router.get('/', (req, res) => {
  // Return all the people currently in the queue.
  res.json(People.get());
});

router.post('/', json, (req, res) => {
  // Add a new person to the queue.
  const {person}=req.body;
  People.enqueue(person)
  return res.status(201).json({message: "Added to queue!"});
});

router.delete('/', (req, res) => {
  return res.status(201).json(People.dequeue());
});

module.exports=router;
