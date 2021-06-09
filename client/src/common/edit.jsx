import React from "react";

const Edit = ({ editMode, onSave, onEdit }) => {
  return (
    <>
      {editMode ? (
        <button onClick={onSave} className="ml-auto mx-2 btn btn-info">
          <i className="fa fa-save"></i>
        </button>
      ) : (
        <button onClick={onEdit} className="ml-auto mx-2 btn btn-success">
          <i className="fa fa-edit"></i>
        </button>
      )}
    </>
  );
};
export default Edit;
