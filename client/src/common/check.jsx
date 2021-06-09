import React from "react";

const CheckButton = ({ onCheck, isChecked }) => {
  const classes = isChecked
    ? "fa fa-lg fa-check-square-o"
    : "fa fa-lg fa-square-o";

  return (
    <button onClick={onCheck} className="btn">
      <i className={classes}></i>
    </button>
  );
};

export default CheckButton;
