import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/layout/home";
import Navbar from "./components/layout/navbar";
import Login from "./components/login/AppLogin";

import AboutUs from "./components/layout/AboutUs";
import ContactUS from "./components/layout/ContactUs";
import RegisterStudent from "./components/users/students/students_crud";

import Course from "./components/courses/crud-course";
import AddCourse from "./components/courses/AddCourse";
import UpdateCourse from "./components/courses/UpdateCourse";
import AssignInstructor from "./components/courses/AssignInstructor"

import Assignment from "./components/assignments/Assignments";

// import FileUpload from './components/file';
// import EditTodo from './components/edit-list.component';
// import TodosList from './components/todos-list.component';
// import Navbar from './components/layout/Navbar';
// import Landing from './components/layout/Landing';
// import Login from './components/auth/Login';
// import Educational from './components/add-EducationDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <div className="container">
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/contactus" component={ContactUS} />
          <Route path="/login" component={Login} />
          <Route path="/registerstudent" component={RegisterStudent} />
          <Route path="/course" component={Course} />
          <Route path="/addCourse" component={AddCourse} />
          <Route path="/updateCourse" component={UpdateCourse} />
          <Route path="/AssignInstructor" component={AssignInstructor} />
          <Route path="/assignment" component={Assignment}/>
        </div>
      </div>
    </Router>
  );
}

export default App;
