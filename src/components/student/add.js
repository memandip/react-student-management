import React, { Component } from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import firebase from '../../config/firebase.config';

export class StudentAddForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            name:'',
            email:'',
            contactNumber:'',
            address:'',
            class:'',
            rollNumber:''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        console.log(this.props.history);
    }

    componentDidMount(){
        let self = this;
        let id = this.props.match.params.id;
        if(id){
            let student = firebase.database().ref('students').child('/'+id);
            if(student){
                student.on('value', snap => {
                    let student = snap.val();
                    self.setState({
                        name: student.name,
                        class: student.class,
                        contactNumber: student.contactNumber,
                        address: student.address,
                        email: student.email,
                        rollNumber:student.rollNumber
                    })
                });
            }
        }
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({[name]:value});
    }

    handleSubmit(event){
        event.preventDefault();
        let self = this;
        let id = this.props.match.params.id;
        let db = null;
        if(id) {
            let student = firebase.database().ref('students').child('/' + id);
            if (student) {
                student.set(self.state);
                NotificationManager.success('Student Updated.');
            }
        }   else    {
            db = firebase.database().ref('students');
            db.push(this.state);
            NotificationManager.success('Student added.');
        }
        this.state = {
            name:'',
            email:'',
            contactNumber:'',
            address:'',
            class:''
        };
        this.props.history.push('/students/list');
    }


    render(){
        return (
            <div>
                <ul>
                    <li>Name: {this.state.name}</li>
                    <li>Email: {this.state.email}</li>
                    <li>Roll no: {this.state.rollNumber}</li>
                    <li>Address: {this.state.address}</li>
                    <li>Contact number: {this.state.contactNumber}</li>
                    <li>Class: {this.state.class}</li>
                </ul>
                <div className="box box-info">
                    <div className="box-header with-border">
                        <h3 className="box-title">Student add Form</h3>
                    </div>
                    <form className="form-horizontal" onSubmit={this.handleSubmit}>
                        <div className="box-body">
                            <div className="form-group">
                                <label htmlFor="name" className="col-sm-3 control-label">Student name</label>

                                <div className="col-sm-9">
                                    <input className="form-control"
                                           onChange={this.handleInputChange}
                                           value={this.state.name}
                                           name="name"
                                           id="name"
                                           placeholder="Student name"
                                           required
                                           type="text" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="class" className="col-sm-3 control-label">Class</label>
                                <div className="col-sm-9">
                                    <input className="form-control"
                                           onChange={this.handleInputChange}
                                           value={this.state.class}
                                           name="class"
                                           id="class"
                                           placeholder="Class"
                                           required
                                           type="text" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="rollNumber" className="col-sm-3 control-label">Roll number</label>
                                <div className="col-sm-9">
                                    <input className="form-control"
                                           onChange={this.handleInputChange}
                                           value={this.state.rollNumber}
                                           name="rollNumber"
                                           id="rollNumber"
                                           placeholder="Roll number"
                                           required
                                           type="text" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="address" className="col-sm-3 control-label">Address</label>
                                <div className="col-sm-9">
                                    <input className="form-control"
                                           onChange={this.handleInputChange}
                                           value={this.state.address}
                                           name="address"
                                           id="address"
                                           placeholder="Student address"
                                           required
                                           type="address" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="contactNumber" className="col-sm-3 control-label">Contact number</label>
                                <div className="col-sm-9">
                                    <input className="form-control"
                                           onChange={this.handleInputChange}
                                           value={this.state.contactNumber}
                                           name="contactNumber"
                                           id="contactNumber"
                                           placeholder="Contact number"
                                           required
                                           type="text" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputEmail3"  className="col-sm-3 control-label">Email</label>

                                <div className="col-sm-9">
                                    <input className="form-control"
                                           onChange={this.handleInputChange}
                                           value={this.state.email}
                                           name="email"
                                           id="inputEmail3"
                                           placeholder="Email"
                                           required
                                           type="email" />
                                </div>
                            </div>
                        </div>
                        <div className="box-footer">
                            <button type="submit" className="btn btn-info pull-right">Save</button>
                        </div>
                    </form>
                </div>
                <NotificationContainer />
            </div>

        );
    }

}