import React, { Component } from 'react';
import { Navbar } from './components/includes/Navbar';
import { Sidebar } from './components/includes/Sidebar';
import { Footer } from './components/includes/Footer';
import { StudentAddForm } from './components/student/add';
import {Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import './bower_components/bootstrap/dist/css/bootstrap.min.css';
import './bower_components/font-awesome/css/font-awesome.min.css';
import './bower_components/Ionicons/css/ionicons.min.css';
import './dist/css/AdminLTE.min.css';
import './dist/css/skins/_all-skins.min.css';

class App extends Component {
  render() {
    return (
        <Router>
            <div className="wrapper">
                <Navbar />
                <Sidebar />
                <div className="content-wrapper">
                    <section className="content">
                        <Switch>
                            <Route exact path="/" component={StudentAddForm} />
                        </Switch>    
                    </section>
                </div>
                <Footer />
            </div>
        </Router>
    );
  }
}

export default App;
