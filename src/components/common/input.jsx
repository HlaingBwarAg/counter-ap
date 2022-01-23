import React, { Component } from "react";

const Input = ({ name, label, onType, error, ...rest }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        name={name}
        onChange={onType}
        id={name}
        {...rest}
        className="form-control"
      />
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;
