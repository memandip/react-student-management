import React, { Component } from 'react';
import { Navbar } from './components/includes/Navbar';
import { Sidebar } from './components/includes/Sidebar';
import { Footer } from './components/includes/Footer';
import { StudentAddForm } from './components/student/add';
import './App.css';
import './bower_components/bootstrap/dist/css/bootstrap.min.css';
import './bower_components/font-awesome/css/font-awesome.min.css';
import './bower_components/Ionicons/css/ionicons.min.css';
import './dist/css/AdminLTE.min.css';
import './dist/css/skins/_all-skins.min.css';

class App extends Component {
  render() {
    return (
        <div className="wrapper">
            <Navbar />
            <Sidebar />
            <div className="content-wrapper">
                {/*<section className="content-header">*/}
                    {/*<h1>*/}
                        {/*Dashboard*/}
                        {/*<small>Control panel</small>*/}
                    {/*</h1>*/}
                    {/*<ol className="breadcrumb">*/}
                        {/*<li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>*/}
                        {/*<li className="active">Dashboard</li>*/}
                    {/*</ol>*/}
                {/*</section>*/}

                <section className="content">
                    <StudentAddForm />
                </section>
            </div>
            <Footer />
        </div>
    );
  }
}

export default App;
