import React, { Component } from "react";
import nProgress from "nprogress";
import Form from "../common/form";
import TodoList from "./todoList";
import "./nprogress.css";
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
nProgress.configure({ showSpinner: false });
class Todo extends Component {
  state = {
    todoList: [],
    inputValue: "",
    editItem: {},
    editInputValue: "",
    isLoadedFromAPI: false,
  };
  async componentDidMount() {
    const result = await getTodoItems();
    this.setState({ todoList: result, isLoadedFromAPI: true });
  }

  handleDelete = async (todoItem) => {
    nProgress.start();
    const result = await deleteTodoItem(todoItem);
    this.setState({ todoList: result });
    nProgress.done();
  };

  handleEdit = (todoItem) => {
    this.setState({ editItem: todoItem });
  };

  handleSave = async (todoItem) => {
    nProgress.start();
    const result = await editTodoItem(this.state.editItem);
    this.setState({ todoList: result, editItem: {}, editInputValue: "" });
    nProgress.done();
    // console.log("saved successfully");
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
    nProgress.start();
    const newTodoItem = { desc: this.state.inputValue };
    const result = await addTodoItem(newTodoItem);
    this.setState({ todoList: result, inputValue: "" });
    nProgress.done();
  };

  render() {
    const { isLoadedFromAPI, todoList, inputValue, editItem } = this.state;
    return (
      <div className="container center my-2 col-md-6">
        <Form
          inputValue={inputValue}
          onChange={this.handleOnChange}
          onSubmit={this.handleOnSubmit}
        />
        {todoList.length !== 0 && (
          <TodoList
            editItem={editItem}
            todoList={todoList}
            onCheck={(todoItem) => this.handleCheckBox(todoItem)}
            onEdit={(todoItem) => this.handleEdit(todoItem)}
            onSave={(todoItem) => this.handleSave(todoItem)}
            onChange={this.handleTodoItemChange}
            onDelete={(todoItem) => this.handleDelete(todoItem)}
          />
        )}
        {isLoadedFromAPI && todoList.length === 0 && (
          <p>There are no items in the todo list</p>
        )}
      </div>
    );
  }
}

export default Todo;
