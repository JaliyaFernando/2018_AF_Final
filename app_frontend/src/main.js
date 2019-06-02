import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddNewCourse from './components/AddNewCourse';
import Courses from './components/DisplayAllCourses';
import CoursePrice from './components/CoursePrice';

const Main = () => (
    <Router>
        <Switch>
            <Route exact path='/' component={AddNewCourse} />
            <Route path='/AddNewCourse' component={AddNewCourse} />
            <Route path='/Courses' component={Courses} />
            <Route path='/CoursePrice' component={CoursePrice} />
        </Switch>
    </Router>
)

export default Main;