const mongoose = require("mongoose");
const TodoItem = require("./../models/todo");

const getItems = async function getItems(req, res, next) {
  const result = await TodoItem.find();
  res.json(result);
};

const addItem = async function addItem(req, res, next) {
  const todoItem = new TodoItem({
    desc: req.body.desc,
  });
  const result = await todoItem.save();
  const todoItems = await TodoItem.find();
  res.json(todoItems);
};

const editItem = async function editItem(req, res, next) {
  const todoItem = await TodoItem.findById(req.body._id);
  //  modify the description
  todoItem.desc = req.body.desc;

  const todoItemResult = await todoItem.save();
  const result = await TodoItem.find();
  res.json(result);
};
const deleteItem = async function deleteItem(req, res, next) {
  const todoItem = await TodoItem.deleteOne({ _id: req.body._id });
  const result = await TodoItem.find();

  res.json(result);
};

module.exports = { getItems, addItem, deleteItem, editItem };
