import React, {Component} from 'react';
import axios from 'axios';
import Courses from './Courses';

export default class DisplayAllCourses extends Component{
    constructor(props){
        super(props);
        this.state ={
            courses:[]
        }
    }
    componentDidMount() {
        axios.get('http://localhost:4000/course/courses')
            .then(res => {
                this.setState({
                    courses : res.data.data
                });
            });
    }
    getData(){
        return this.state.courses.map((course,i) => {
            return (<Courses obj={course} key={i}/>)
        });
    }
    render() {
        return(
            <div>
                <h1>All the courses</h1>
                <table width="100%">
                    <thead>
                    <tr>
                        <th>Course ID</th>
                        <th>Name</th>
                        <th>Code</th>
                        <th>Pass Mark</th>
                        <th>Lecture In Charge</th>
                        <th>Subjects</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.getData()}
                    </tbody>
                </table>
            </div>
        )
    }
}