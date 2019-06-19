import React, {Component} from 'react';
import 'react-datepicker/dist/react-datepicker.css';

export default class Assignments extends Component{
    
    render(){
        return(
            <div>
                <div className="form-group">
                    <label for="AssignmentHeading">Assignment Details :</label>
                    <textarea className="form-control rounded-0" id="AssignmentHeading" rows="10"></textarea>
                </div>
               
                <form>
                <div className="form-group">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroupFileAddon01">Upload Assignment</span>
                    </div>
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="inputGroupFile01"
                        aria-describedby="inputGroupFileAddon01"/>
                        <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                    </div>
                </div>
                   <br />
                    <label for="courseId">Course ID:</label>
                    <input type="courseId" className="form-control" id="courseId"/>
                </div>
                <div>
                    <label for="assignmentId">Assignment ID:</label>
                    <input type="assignmentId" className="form-control" id="assignmentId"/>
                </div><br />
                <div className="form-group">
                    <label for="status">Submission Status:</label>
                    <input type="status" className="form-control" id="status"/>
                </div>
                {/* <div class="dropdown">
                <label for="status">Submission Status : </label>
                <br />
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown button
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">No attempt</a>
                    <a className="dropdown-item" href="#">Submitted</a>
                </div>
                </div>
                <br /> */}
                <div className="form-group">
                    <label for="gradingStatus">Grading Status:</label>
                    <input type="gradingStatus" className="form-control" id="gradingStatus"/>
                </div>
                <div className="form-group">
                    <label for="createdDate">Created Date:</label>
                    <input type="createdDate" className="form-control" id="createdDate"/>
                </div>
                <div className="form-group">
                    <label for="dueDate">Due Date:</label>
                    <input type="dueDate" className="form-control" id="dueDate"/>
                </div>
                <div className="form-group">
                    <label for="remainTime">Time Remaininig:</label>
                    <input type="remainTime" className="form-control" id="remainTime"/>
                </div>
                <div className="form-group">
                    <label for="size">Maximum File Size:</label>
                    <input type="size" className="form-control" id="size"/>
                </div>
                <div className="form-group">
                    <label for="lastModify">Last Modify:</label>
                    <input type="lastModify" className="form-control" id="lastModify"/>
                </div>
                <div className="form-group">
                    <label for="comments">Comments :</label>
                    <textarea className="form-control rounded-0" id="comments" rows="4"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Create Assignment</button>
              </form>

            </div>           
        
        )
    }
}