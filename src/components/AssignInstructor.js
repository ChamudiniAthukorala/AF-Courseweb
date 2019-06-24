import React, {Component} from 'react';
import axios from "axios";
const validator = require("validator");

export default class AssignInstructor extends Component{

    constructor(props){
        super(props);

        this.onChangeId = this.onChangeId.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeCourseId = this.onChangeCourseId.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            uid: "",
            email: "",
            courseId: ""
        };

    }

    onChangeId(e) {
        this.setState({
            uid: e.target.value
        });
      }

      onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
      }

      onChangeCourseId(e) {
        this.setState({
            courseID: e.target.value
        });
      }

      onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted`);
    
        const newInstructor = {
            uid: this.state.uid,
            email: this.state.email,
            courseID: this.state.courseID
        };
    
        axios
          .post("http://localhost:5000/api/assignInstructor/add", newInstructor)
          .then(res => console.log(res.data));
    
        this.setState({
            uid: "",
            email: "",
            courseId: ""
        });

        alert("Successfully assign the instructor to the course");
      }

    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label for="uid">Instructor ID :</label>
                        <input type="text" className="form-control" id="uid" 
                            value={this.state.uid}
                            onChange={this.onChangeId}
                        />
                    </div>
                    <div className="form-group">
                        <label for="email">Email :</label>
                        <input type="text" className="form-control" id="email"
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                        />
                    </div>                  
                    <div className="form-group">
                        <label for="courseId">Course ID :</label>
                        <input type="text" className="form-control" id="courseId"
                            value={this.state.courseID}
                            onChange={this.onChangeCourseId}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" >Assign Instructor</button>
                </form>
            </div>
        )
    }
}