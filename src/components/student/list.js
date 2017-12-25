import React, { Component } from 'react';
import $ from 'jquery';
import firebase from '../../config/firebase.config';
import { Student } from "./student";

export class StudentList extends Component{

    constructor(props){
        super(props);
        this.state = {
            students: []
        };
    }

    componentDidMount(){
        let db = firebase.database().ref('students');
        let self = this;
        db.on('value', function(snap){
           self.setState({students:snap.val()});
        });
    }

    render(){
        let self = this;
        let students = $.map(self.state.students, function(student, i){
            return (
                <div className="col-md-6 col-xs-12" key={i}>
                    <Student student={student} id={i} key={i}/>
                </div>
            );
        });
        return (
            <div className='col-md-12'>{students}</div>
        );
    }

}