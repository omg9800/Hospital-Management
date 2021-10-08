import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

class Home extends React.Component {
  state = {
    username: "",
    password: "",
    role: "admin",
  };

  handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    console.log(this.state);
    if (this.state.role === "admin") this.props.history.push("/admin");
    else if (this.state.role === "doctor") this.props.history.push("/doctor");
    else if (this.state.role === "staff") this.props.history.push("/staff");
    //console.log(this.state);
    e.preventDefault();
  };

  render() {
    return (
      <div className="homeParent">
        <form>
          <li>
            <select
              name="role"
              value={this.state.role}
              onChange={this.handleChange}
            >
              <option value="admin">Admin</option>
              <option value="doctor">Doctor</option>
              <option value="staff">Staff</option>
            </select>
          </li>
          <li>
            <input
              placeholder="Username"
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </li>
          <li>
            <input
              placeholder="Password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </li>
          <li>
            <button onClick={this.handleSubmit}>Login</button>
          </li>
        </form>
      </div>
    );
  }
}

export default Home;
