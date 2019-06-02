import React, {Component} from 'react';
import axios from 'axios';
import ResultData from './resultData';
let subject =[];
export default class AddNewCourse extends Component{
    constructor(props){
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeCode = this.onChangeCode.bind(this);
        this.onChangePassMark = this.onChangePassMark.bind(this);
        this.onChangeLectureInCharge = this.onChangeLectureInCharge.bind(this);
        this.onChangeSubject = this.onChangeSubject.bind(this);
        this.onChangeSubID = this.onChangeSubID.bind(this);

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            id:'',
            name:'',
            code:'',
            passMark:'',
            lectureInCharge:'',
            allSubjects:[],
        };
    }
    onChangeName(e){
        this.setState({
            name : e.target.value
        });
    }
    onChangeCode(e){
        this.setState({
            code : e.target.value
        });
    }
    onChangePassMark(e){
        this.setState({
            passMark : e.target.value
        });
    }
    onChangeLectureInCharge(e){
        this.setState({
            lectureInCharge : e.target.value
        });
    }
    onChangeSubject(e){
        if(e.target.checked){
            subject.push(e.target.value);
            console.log(subject);
        }else if(!e.target.checked){
            var index = subject.indexOf(e.target.value);
            subject.splice(index,1);
            console.log(subject);
        }
    }
    onChangeSubID(e){
        this.setState({
            id : e.target.checked
        });
    }
    onSubmit(){
        console.log(this.state.subjects);
        const obj = {
            name : this.state.name,
            code : this.state.code,
            passMark : this.state.passMark,
            lectureInCharge : this.state.lectureInCharge,
            subjects : subject
        }
        axios.post('http://localhost:4000/course/add',obj)
            .then(res => {console.log(res.data)});
    }
    componentDidMount() {
        axios.get('http://localhost:4000/subject/subjects')
            .then(res => {
                this.setState({
                    allSubjects : res.data.subject
                });
            });
    }
    getData(){
        console.log(this.state.allSubjects);
        return this.state.allSubjects.map((subject,i) => {
            return (
                <ResultData  obj={subject} key={i} />
            )
        });

    }
    render() {
        return(
            <div>
                <h1>Add New Course</h1>
                <form onSubmit={this.onSubmit}>
                    <label><b>Course Name</b></label>
                    <input
                        type="text"
                        placeholder="Enter Course Name"
                        value={this.state.name}
                        onChange={this.onChangeName}
                        required
                    />

                    <label><b>Code</b></label>
                    <input
                        type="text"
                        placeholder="Enter Course code"
                        value={this.state.code}
                        onChange={this.onChangeCode}
                        required
                    />

                    <label><b>Pass Mark</b></label>
                    <input
                        type="text"
                        placeholder="Enter Course Pass Mark"
                        value={this.state.passMark}
                        onChange={this.onChangePassMark}
                        required
                    />

                    <label><b>Lecture In Charge</b></label>
                    <input
                        type="text"
                        placeholder="Enter Lecture In Charge name"
                        value={this.state.lectureInCharge}
                        onChange={this.onChangeLectureInCharge}
                        required
                    />

                    <div>
                        <table width="100%">
                            <thead>
                            <tr>
                                <th>Subjcet ID</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Amount</th>
                                <th>Select</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.allSubjects.map(subjects => {
                                    return (
                                        <tr key={subjects._id}>
                                            <td>{subjects._id}</td>
                                            <td>{subjects.name}</td>
                                            <td>{subjects.description}</td>
                                            <td>{subjects.amount}</td>
                                            <td>
                                                <input
                                                    type="checkbox"
                                                    value={subjects._id}
                                                    onChange={this.onChangeSubject}
                                                />
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                    </div>

                    <div className="clearfix">
                        <button type="reset" className="cancelbtn">Cancel</button>
                        <button type="submit" className="signupbtn">Confirm</button>
                    </div>
                </form>
            </div>
        )
    }
}