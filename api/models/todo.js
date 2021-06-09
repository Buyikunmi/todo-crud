const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const todoItemSchema = new Schema({
  desc: { type: String, required: true },
  isCompleted: { type: Boolean, default: false },
});

const TodoItem = model("TodoItem", todoItemSchema);

module.exports = TodoItem;
