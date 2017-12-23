import React, { Component } from 'react';

import firebase from '../../config/firebase.config';

export class StudentAddForm extends Component{

    constructor(props){
        super(props);
        this.state = {
                name:'',
                email:'',
                contactNumber:'',
                address:'',
                class:''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({[name]:value});
    }

    handleSubmit(event){
        event.preventDefault();
        let db = firebase.database().ref('students');
        db.push(this.state);
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
                                           placeholder="Email"
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
                                           type="email" />
                                </div>
                            </div>
                        </div>
                        <div className="box-footer">
                            <button type="submit" className="btn btn-info pull-right">Save</button>
                        </div>
                    </form>
                </div>
            </div>

        );
    }

}