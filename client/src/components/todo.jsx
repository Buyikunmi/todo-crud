import React, { Component } from "react";

import Form from "../common/form";
import TodoList from "./todoList";
import {
  getTodoItems,
  addTodoItem,
  deleteTodoItem,
  editTodoItem,
} from "../services/todoService";
// container
// state list of todo
// delete button
// add button
// todo list

class Todo extends Component {
  state = {
    todoList: [],
    inputValue: "",
    editItem: {},
    editInputValue: "",
  };
  async componentDidMount() {
    const result = await getTodoItems();
    this.setState({ todoList: result });
  }

  handleDelete = async (todoItem) => {
    const result = await deleteTodoItem(todoItem);
    this.setState({ todoList: result });
  };

  handleEdit = (todoItem) => {
    this.setState({ editItem: todoItem });
  };

  handleSave = async (todoItem) => {
    const result = await editTodoItem(this.state.editItem);
    this.setState({ todoList: result, editItem: {}, editInputValue: "" });
    console.log("saved successfully");
  };

  handleTodoItemChange = (event) => {
    const editItem = this.state.editItem;
    editItem.desc = event.target.value;

    this.setState({ editItem });
  };
  handleCheckBox = (todoItem) => {
    const todoList = [...this.state.todoList].map((item) => {
      if (item === todoItem) item.isCompleted = !item.isCompleted;
      return item;
    });

    this.setState({ todoList });
  };

  handleOnChange = (event) => {
    const inputValue = event.target.value;
    this.setState({ inputValue });
  };

  handleOnSubmit = async (e) => {
    e.preventDefault();
    const newTodoItem = { desc: this.state.inputValue };
    const result = await addTodoItem(newTodoItem);
    this.setState({ todoList: result, inputValue: "" });
  };

  render() {
    return (
      <div className="container center my-2 col-md-6">
        <Form
          inputValue={this.state.inputValue}
          onChange={this.handleOnChange}
          onSubmit={this.handleOnSubmit}
        />
        <TodoList
          editItem={this.state.editItem}
          todoList={this.state.todoList}
          onCheck={(todoItem) => this.handleCheckBox(todoItem)}
          onEdit={(todoItem) => this.handleEdit(todoItem)}
          onSave={(todoItem) => this.handleSave(todoItem)}
          onChange={this.handleTodoItemChange}
          onDelete={(todoItem) => this.handleDelete(todoItem)}
        />
      </div>
    );
  }
}

export default Todo;
