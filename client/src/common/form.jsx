import React from "react";

const Form = ({ onChange, onSubmit, inputValue }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="form-inline d-flex justify-content-between align-items-center"
    >
      <div className="form-group mx-sm-3 mb-2">
        <input
          onChange={onChange}
          value={inputValue}
          type="text"
          className="form-control"
          placeholder="Add a new item"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary mb-2">
        Add
      </button>
    </form>
  );
};

export default Form;
