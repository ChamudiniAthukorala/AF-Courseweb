import React, {Component} from 'react';
import axios from "axios";
const validator = require("validator");

export default class AddCourse extends Component{

    constructor(props) {
        super(props);
    
        this.onChangeId = this.onChangeId.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangeSemester = this.onChangeSemester.bind(this);
        this.onChangeLectureIn = this.onChangeLectureIn.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
            courseId: "",
            courseName: "",
            description: "",
            year: "",
            semester: "",
            lectureIncharge: ""
        };
      }

      onChangeId(e) {
        this.setState({
            courseId: e.target.value
        });
      }

      onChangeName(e) {
        this.setState({
            courseName: e.target.value
        });
      }

      onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
      }

      onChangeYear(e) {
        this.setState({
            year: e.target.value
        });
      }

      onChangeSemester(e) {
        this.setState({
            semester: e.target.value
        });
      }

      onChangeLectureIn(e) {
        this.setState({
            lectureIncharge: e.target.value
        });
      }
      
      onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted`);
    
        const newCourse = {
            courseId: this.state.courseId,
            courseName: this.state.courseName,
            description: this.state.description,
            year: this.state.year,
            semester: this.state.semester,
            lectureIncharge: this.state.lectureIncharge
        };
    
        axios
          .post("http://localhost:5000/api/courses/add", newCourse)
          .then(res => console.log(res.data));
    
        this.setState({
            courseId: "",
            courseName: "",
            description: "",
            year: "",
            semester: "",
            lectureIncharge: ""
        });

        alert("Successfully added the course details");
      }

    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label for="courseId">Course ID :</label>
                        <input type="text" className="form-control" id="courseId" 
                            value={this.state.courseId}
                            onChange={this.onChangeId}
                        />
                    </div>
                    <div className="form-group">
                        <label for="courseName">Course Name :</label>
                        <input type="text" className="form-control" id="courseName"
                            value={this.state.courseName}
                            onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label for="description">Description :</label>
                        <input type="text" className="form-control" id="description"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />
                    </div>                    
                    <div className="form-group">
                        <label for="year">Year:</label>
                        <input type="text" className="form-control" id="year"
                            value={this.state.year}
                            onChange={this.onChangeYear}
                        />
                    </div>
                    <div className="form-group">
                        <label for="semester">Semester :</label>
                        <input type="text" className="form-control" id="semester"
                            value={this.state.semester}
                            onChange={this.onChangeSemester}
                        />
                    </div>
                    <div className="form-group">
                        <label for="inCharge">Lecture in Charge :</label>
                        <input type="text" className="form-control" id="inCharge"
                            value={this.state.lectureIncharge}
                            onChange={this.onChangeLectureIn}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" >Add Course</button>
                </form>
            </div>
        )
    }
}