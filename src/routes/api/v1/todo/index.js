const express = require('express');
const router = express.Router();
const { Todo } = require('../../../../database/models');

router.get('/', async (req, res) => {
  const todoList = await Todo.getTodoList();
  return res.status(200).send(todoList);
});

router.post('/', async (req, res) => {
  const param = {
    title: req.body.title,
    detail: req.body.detail,
    isFinished: false,
  };

  await Todo.addTodo(param);
  res.status(200).send();
});

router.put('/:id', async (req, res) => {
  const param = {
    title: req.body.title,
    detail: req.body.detail,
    isFinished: req.body.isFinished,
    id: req.body.id,
  };

  await Todo.updateTodo(param);
  return res.status(200).send();
});

router.delete('/:id', async (req, res) => {
  await Todo.deleteTodo(req.params.id);
  return res.status(200).send();
});

module.exports = router;
