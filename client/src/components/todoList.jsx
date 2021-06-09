import React from "react";

import CheckButton from "./../common/check";
import EditButton from "./../common/edit";
import Delete from "./../common/delete";

const TodoList = ({
  editItem,
  todoList,
  onCheck,
  onDelete,
  onEdit,
  onSave,
  onChange,
}) => {
  return (
    <ul className="list-group ">
      {todoList.map((todoItem) => (
        <li
          key={todoItem._id}
          className={
            todoItem.isCompleted
              ? "list-group-item list-group-item-warning d-flex  justify-content-between align-items-center"
              : "list-group-item d-flex justify-content-between align-items-center"
          }
        >
          <CheckButton
            isChecked={todoItem.isCompleted}
            onCheck={() => onCheck(todoItem)}
          />
          {editItem._id === todoItem._id ? (
            <>
              <input value={editItem.desc} onChange={onChange} />
              <EditButton editMode={true} onSave={() => onSave(todoItem)} />
            </>
          ) : (
            <>
              {todoItem.desc}
              <EditButton editMode={false} onEdit={() => onEdit(todoItem)} />
            </>
          )}
          <Delete onDelete={() => onDelete(todoItem)} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
