import React, {Component} from 'react';


export default class Submissions extends Component{

    render(){
        return(
            <div>
                <div className="form-group">
                    <label for="AssignmentHeading">Assignment Details :</label>
                    <textarea className="form-control rounded-0" id="AssignmentHeading" rows="10"></textarea>
                </div>
               
             <form>
                <div className="form-group">
                    <label for="courseId">Course ID:</label>
                    <input type="courseId" className="form-control" id="courseId"/>
                </div>
                <div className="form-group">
                    <label for="status">Submission Status:</label>
                    <input type="status" className="form-control" id="status"/>
                </div>
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
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroupFileAddon01">Upload Submission</span>
                    </div>
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" id="inputGroupFile01"
                        aria-describedby="inputGroupFileAddon01"/>
                        <label className="custom-file-label" for="inputGroupFile01">Choose file</label>
                    </div>
                </div><br />
                <div className="form-group">
                    <label for="lastModify">Last Modify:</label>
                    <input type="lastModify" className="form-control" id="lastModify"/>
                </div>
                <div className="form-group">
                    <label for="comments">Comments:</label>
                    <input type="comments" className="form-control" id="comments"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit Assignment</button>
              </form>

            </div>           
        
        )
    }
}