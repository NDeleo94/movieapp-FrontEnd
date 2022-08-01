import React from "react";

const InputTextArea = ({ id, placeHolder, onChangeFn }) => {
  return (
    <div className="m-1">
      <label htmlFor={id} className="form-label">
        {id[0].toUpperCase() + id.substring(1)}
      </label>
      <textarea
        className="form-control"
        id={id}
        rows={3}
        placeholder={placeHolder}
        defaultValue={""}
        onChange={onChangeFn}
        required
      />
    </div>
  );
};

export default InputTextArea;
