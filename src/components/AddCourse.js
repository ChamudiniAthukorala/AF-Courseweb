import React, {Component} from 'react';

export default class AddCourse extends Component{

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
                        <label for="enrollmentKey">Enrollment Key :</label>
                        <input type="text" className="form-control" id="enrollmentKey"/>
                    </div>
                    <div>
                        <label for="courseDescription">Course Description :</label>
                        <textarea className="form-control rounded-0" id="courseDescription" rows="10"></textarea>
                    </div><br />
                    <div className="form-group">
                        <label for="year">Year:</label>
                        <input type="text" className="form-control" id="year"/>
                    </div>
                    <div className="form-group">
                        <label for="semester">Semester :</label>
                        <input type="text" className="form-control" id="semester"/>
                    </div>
                    <div className="form-group">
                        <label for="inCharge">Lecture in Charge :</label>
                        <input type="text" className="form-control" id="inCharge"/>
                    </div>
                    <button type="submit" class="btn btn-primary">Add Course</button>

                    </form>
            </div>
        )
    }
}