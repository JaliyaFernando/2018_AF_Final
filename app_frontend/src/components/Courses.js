import React, {Component} from 'react';
import Subject from './Subjects';

export default class Courses extends Component{
    constructor(props){
        super(props);
        this.state = {
            id:'',
            name:'',
            code:'',
            passMark:'',
            lectureInCharge:'',
            subjects:[]
        }
    }
    componentDidMount() {
        this.setState({
            id: this.props.obj._id,
            name:this.props.obj.name,
            code:this.props.obj.code,
            passMark:this.props.obj.passMark,
            lectureInCharge:this.props.obj.lectureInCharge,
            subjects : this.props.obj.subjects
        });
    }
    getSubjects() {
        return this.state.subjects.map( (subject,i) => {
                return (<Subject obj={subject} key={i}/>)
            }
        );
    }
    render() {
        return (
                <tr>
                    <td>{this.state.id}</td>
                    <td>{this.state.name}</td>
                    <td>{this.state.code}</td>
                    <td>{this.state.passMark}</td>
                    <td>{this.state.lectureInCharge}</td>
                    <td>
                        {
                            this.state.subjects.map(subject => {
                                return (
                                    <td>{subject}</td>
                                )
                            })
                        }
                    </td>
                </tr>
        );
    }
}