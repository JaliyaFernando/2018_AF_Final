import React,{Component} from 'react';

export default class navbar extends Component{
    render(){

        return <div className="topnav" id="myTopnav">
            <a href="/AddNewCourse" >AddNewCourse</a>
            <a href="/Courses" >Courses</a>
            <a href="/CoursePrice" >CoursePrice</a>

            <a href="#about" className="icon">&#9776;</a>

        </div>
    }
}