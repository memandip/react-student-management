import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'
import firebase from '../../config/firebase.config';

export class Student extends Component{

    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(event){
        event.preventDefault();
        let id = this.props.id;
        let db = firebase.database().ref('students').child('/'+id);
        confirmAlert({
            title: 'Delete',
            message: 'Are you sure to do this delete ?',
            confirmLabel: 'Confirm',
            cancelLabel: 'Cancel',
            onConfirm: () => db.remove(),
        });
    }

    render(){
        return (
            <div className="box box-widget widget-user-2" id={this.props.id}>
                <div className="widget-user-header bg-yellow">
                    <div className="widget-user-image">
                        <img className="img-circle" src="../dist/img/avatar.png" alt="User Avatar" />
                    </div>
                    <h3 className="widget-user-username">{this.props.student.name}</h3>
                    <h5 className="widget-user-desc">{this.props.student.email}</h5>
                </div>
                <div className="box-footer no-padding">
                    <ul className="nav nav-stacked">
                        <li>
                            <Link to={"/student/" + this.props.id} style={{display:'inline-block'}}>
                                <button className="btn btn-xs btn-success"  onClick={this.handleClick}>Edit</button>
                            </Link>
                            <button className="btn btn-xs btn-danger" onClick={this.handleDelete}>Delete</button>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }


}