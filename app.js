import React, {Component} from 'react';
import {BrowserRouter as Router , Route, Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Assignment from './src/components/Assignments';
import Submission from './src/components/Submissions';
import AddCourse from './src/components/AddCourse';

export default class App extends Component{

    render(){
        return(
            <Router>
                 <div className='container'>
                                    <nav className="navbar navbar-expand-sm bg-light navbar-light">
                                    <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link">
                                           Create Assignment
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/submissions" className="nav-link">
                                           Submit Assignment
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/courses" className="nav-link">
                                           Add Course
                                        </Link>
                                    </li>
                                    
                                    </ul>
                                   </nav>
                                   <br />
      
                <Route path="/" exact component={Assignment}/>
                <Route path="/submissions" exact component={Submission}/>
                <Route path="/courses" exact component={AddCourse}/>

                 </div>
            </Router>
        )
    }
}