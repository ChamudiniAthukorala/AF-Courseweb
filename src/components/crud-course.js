import React, { Component } from "react";
import { BrowswerRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
const validator = require("validator");

export default class CreateTodo extends Component {
  constructor(props) {
    super(props);

    this.onChangeCourseID = this.onChangeCourseID.bind(this);
    this.onChangename = this.onChangename.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeyear = this.onChangeyear.bind(this);
    this.onChangeSemester = this.onChangeSemester.bind(this);
    this.onChangeLecture = this.onChangeLecture.bind(this);

    this.state = {
      courseId: "",
      courseName: "",
      description: "",
      year: "",
      semester: "",
      lectureIncharge: ""
    };
  }

  onChangeCourseID(e) {
    this.setState({
      fname: e.target.value
    });
  }
  onChangename(e) {
    this.setState({
      lname: e.target.value
    });
  }
  onChangeDescription(e) {
    this.setState({
      dob: e.target.value
    });
  }
  onChangeuid(e) {
    this.setState({
      uid: e.target.value
    });
  }
  onChangeemail(e) {
    this.setState({
      email: e.target.value
    });
  }
  onChangepassword(e) {
    this.setState({
      password: e.target.value
    });
  }
  onChangeconfirmPassword(e) {
    this.setState({
      confirmPassword: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const newStudent = {
      fname: this.state.fname,
      lname: this.state.lname,
      dob: this.state.dob,
      uid: this.state.uid,
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    };

    axios
      .post("http://localhost:5000/api/studets/", newStudent)
      .then(res => console.log(res.data));

    this.setState({
      fname: "",
      lname: "",
      dob: "",
      uid: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
  }

  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Add Your Profile Details</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="dis">First Name</label>
            <input
              type="text"
              className="form-control"
              value={this.state.fname}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="res">Last name</label>
            <input
              type="text"
              className="form-control"
              value={this.state.lname}
              onChange={this.onChangeLname}
            />
          </div>

          <div className="form-group">
            <label htmlFor="res">Date of birth</label>
            <input
              type="date"
              className="form-control"
              value={this.state.dob}
              onChange={this.onChangedob}
            />
          </div>

          <div className="form-group">
            <label htmlFor="res">User ID</label>
            <input
              type="text"
              className="form-control"
              value={this.state.uid}
              onChange={this.onChangeuid}
            />
          </div>

          <div className="form-group">
            <label htmlFor="res">Email</label>
            <input
              type="text"
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeemail}
            />
          </div>

          <div className="form-group">
            <label htmlFor="res">Password</label>
            <input
              type="password"
              className="form-control"
              value={this.state.password}
              onChange={this.onChangepassword}
            />
          </div>
          <div className="form-group">
            <label htmlFor="res">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              value={this.state.confirmPassword}
              onChange={this.onChangeconfirmPassword}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Add Details"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
