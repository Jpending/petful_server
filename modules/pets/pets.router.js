const express=require('express');
const json=require('body-parser').json();

const Pets=require('./pets.service');
const People=require('../people/people.service');

const router=express.Router();

router.get('/:type', (req, res) => {
  const type=req.params.type;
  return res.status(200).json(Pets.get(type))
});

router.delete('/:type', json, (req, res) => {
  const type=req.params.type;
  return res.status(204).json(Pets.dequeue(type));
});

module.exports=router;
