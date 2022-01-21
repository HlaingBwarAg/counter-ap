import React, { Component } from "react";
import Input from "./common/input";
import Joi from "./joi-browser";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required(),
    password: Joi.string().required(),
  };

  validate = () => {
    const result = schema.validate(this.state.account, this.schema);
    console.log(result);

    const errors = {};

    const { account } = this.state;
    if (this.state.account.username.trim() === "")
      errors.username = "Username is required.";
    if (account.password.trim() === "")
      errors.password = "Password is required.";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    console.log(errors);
    this.setState({ errors: errors || {} });
    if (errors) return;

    // call the server
    console.log("submitted");
  };

  validateOnType = ({ name, value }) => {
    if (name === "username") {
      if (value.trim() === "") return "Username is required.";
      // ...
    }
    if (name === "password") {
      if (value.trim() === "") return "Password is required.";
      // ...
    }
  };

  handleType = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateOnType(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;

    this.setState({ account, errors });
  };

  render() {
    const { account, errors } = this.state;

    return (
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            onType={this.handleType}
            value={account.username}
            label="Username"
            error={errors.username}
            type="text"
          />
          <Input
            name="password"
            onType={this.handleType}
            value={account.password}
            label="Password"
            error={errors.password}
            type="password"
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;