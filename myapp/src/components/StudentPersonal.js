import React, { Component } from "react";
import ReactDOM from "react-dom"
import Sample from "./Sample";
import StudEducational from "./StudentEducational";
import StudAttendance from "./StudentAttendance";
import StudIAmarks from "./StudentIamarks";
import StudOffice from "./StudentOffice";
import StudentHome from "./StudentHome";

class StudPersonal extends Component {
    constructor(){
        super()
        this.backClick=this.backClick.bind(this)  
        this.stuhomeClick=this.stuhomeClick.bind(this)  
        this.stupersonalClick=this.stupersonalClick.bind(this)  
        this.stueducationalClick=this.stueducationalClick.bind(this)  
        this.stuattendanceClick=this.stuattendanceClick.bind(this)  
        this.stuiamarksClick=this.stuiamarksClick.bind(this)  
        this.stuofficeClick=this.stuofficeClick.bind(this)  
     }
  
     backClick(event){
        ReactDOM.render(<Sample/>,document.getElementById('root'))
      }

      stuhomeClick(event){
        ReactDOM.render(<StudentHome/>,document.getElementById('root'))
      }

      stupersonalClick(event){
        ReactDOM.render(<StudPersonal/>,document.getElementById('root'))
      }

      stueducationalClick(event){
        ReactDOM.render(<StudEducational/>,document.getElementById('root'))
      }

      stuattendanceClick(event){
        ReactDOM.render(<StudAttendance/>,document.getElementById('root'))
      }

      stuiamarksClick(event){
        ReactDOM.render(<StudIAmarks/>,document.getElementById('root'))
      }

      stuofficeClick(event){
        ReactDOM.render(<StudOffice/>,document.getElementById('root'))
      }
      
    render(){
        return(
            <div>
                <nav id="Color" class="navbar" role="navigation" aria-label="main navigation">
                    <div  class="navbar-menu">
                        {/* <div class="navbar-start">
                        <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link">
                            More
                            </a>
                            <div class="navbar-dropdown">
                            <a class="navbar-item">
                                About
                            </a>
                            <a class="navbar-item">
                                Jobs
                            </a>
                            <a class="navbar-item">
                                Contact
                            </a>
                            <hr class="navbar-divider" />
                            <a class="navbar-item">
                                Report an issue
                            </a>
                            </div>
                        </div>
                        </div> */}
                        <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="buttons">
                            <a class="navbar-item-white" onClick={this.backClick}>
                                <strong>Logout</strong>
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </nav>
                    <h1>personal</h1>

                    
                    <div id="Size">
                    <aside class="menu">
                        <ul class="menu-list">
                            <li><a onClick={this.stuhomeClick}>Home</a></li>
                            <hr class="navbar-divider" />
                            <li><a onClick={this.stupersonalClick}>Personal Information</a></li>
                            <hr class="navbar-divider" />
                            <li><a onClick={this.stueducationalClick}>Educational Information</a></li>
                            <hr class="navbar-divider" />
                            <li><a onClick={this.stuattendanceClick}>Attendance</a></li>
                            <hr class="navbar-divider" />
                            <li><a onClick={this.stuiamarksClick}>IA Marks</a></li>
                            <hr class="navbar-divider" />
                            <li><a onClick={this.stuofficeClick}>Office</a></li>
                            <hr class="navbar-divider" />
                        </ul>
                        </aside>
                        </div>

            </div>

            );
        }
    }
    
    export default StudPersonal;