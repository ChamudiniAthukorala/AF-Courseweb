import React, {Component} from 'react';

export default class AddMarks extends Component{

    render(){
        return(
          
            <div>
            <form>
                <div className="form-group">
                    <label for="courseId">Course ID :</label>
                    <input type="text" className="form-control" id="courseId"/>
                </div>
                <div className="form-group">
                        <label for="courseName">Course Name :</label>
                        <input type="text" className="form-control" id="courseName"/>
                </div>
                <div className="form-group">
                    <label for="assignmentId">Assignment ID :</label>
                    <input type="text" className="form-control" id="assignmentId"/>
                </div>
                <div className="form-group">
                        <label for="inCharge">Lecture in Charge :</label>
                        <input type="text" className="form-control" id="inCharge"/>
                </div>
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
                </div>
                <br />
                <button type="submit" class="btn btn-primary">Add Marks</button>

            </form>
        </div>
        )
    }
}