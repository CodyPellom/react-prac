import React, { Component } from 'react';
import "./Validator.css";

class Validator extends Component {
  state = {
    email: String,
    password: String,
    passwordConfirm: String,
    valid: true,
  }
  handleEmail = (event) => {
    this.setState({ email: event.target.value })
  }

  handlePassword = (event) => {
    this.setState({ password: event.target.value })
  }

  handlePasswordConfirm = (event) => {
    this.setState({ passwordConfirm: event.target.value })
  }

valid = (event) => {
  if (this.state.password === this.state.passwordConfirm) {
      this.setState({ valid: true })
  } else {
    this.setState({ valid: false })
  }
}

  render() {
    let validText = this.state.valid ? "Passwords Match" : "Passwords do not match"
    return (
      <div className="form">
        <h1>Sign Up</h1>
        <input onChange={(e) => this.handleEmail(e)} type="text" placeholder="your email" />
        <input onChange={(e) => this.handlePassword(e)} type="password" placeholder="your password" />
        <input onChange={(e) => this.handlePasswordConfirm(e)} type="password" placeholder="confirm password" />
        <input type="submit" onClick={this.valid}></input>
        <h1>{validText}</h1>
      </div>
    );
  }
}

export default Validator;