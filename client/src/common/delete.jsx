import React from "react";

const Delete = ({ onDelete }) => {
  return (
    <button onClick={onDelete} className="btn btn-danger">
      <i className="fa fa-trash"></i>
    </button>
  );
};
export default Delete;
