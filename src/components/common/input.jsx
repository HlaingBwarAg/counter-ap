import React, { Component } from "react";

const Input = ({ name, label, onType, value, type, error }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        onChange={onType}
        value={value}
        id={name}
        name={name}
        type={type}
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
