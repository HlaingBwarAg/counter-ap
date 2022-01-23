import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import Select from "./select";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const { error } = Joi.validate(this.state.data, this.schema, {
      abortEarly: false,
    });
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateOnType = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleType = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateOnType(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data, errors });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  renderInput(name, label, type, list) {
    const { data, errors } = this.state;
    return (
      <Input
        name={name}
        onType={this.handleType}
        value={data[name]}
        label={label}
        error={errors[name]}
        type={type}
      />
    );
  }

  renderSelect(name, options, label) {
    const { data } = this.state;
    return (
      <Select
        name={name}
        onType={this.handleType}
        value={data[name]}
        label={label}
        options={options}
      />
    );
  }

  // renderDatalist(option) {
  //   return (

  //   )
  // }

  renderButton(label) {
    return (
      <button
        disabled={this.validate()}
        type="submit"
        className="btn btn-primary"
      >
        {label}
      </button>
    );
  }
}

export default Form;
