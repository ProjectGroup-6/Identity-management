import React, { Component } from "react";
import ReactDOM from "react-dom"
import Sample from "../components/Sample";
import StudEducational from "../student/StudentEducational";
import StudAttendance from "../student/StudentAttendance";
import StudIAmarks from "../student/StudentIamarks";
import StudOffice from "../student/StudentOffice";
import StudentHome from "../student/StudentHome";
import App from '../App'


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
        this.state={
            users : []
        }
     }

     componentDidMount() {
        const data1 = {'studentid': sessionStorage.getItem('username')}
        
        fetch('http://localhost:5000/studentid_validation', {
            method: 'POST',
            body: data1,
        })
        .then(response => response.json())
        .then(data => {
         if(data.result==0){
             alert("StudentID not found. Please enter proper studentid")
         }
         else{
            let self = this;
            fetch('http://localhost:5000/student_data_fetch', {
                method: 'GET'
            }).then(function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            }).then(function(data) {
                self.setState({users: data});
            }).catch(err => {
            console.log('caught it!',err);
            })
         }
       })
    }


    
  
     backClick(event){
        ReactDOM.render(<App/>,document.getElementById('root'))
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
                    <h1>USER ID : {sessionStorage.getItem('username')}</h1>

                    
                    <div id="Size">
                    <aside class="menu">
                        <ul class="menu-list">
                            <li><a onClick={this.stuhomeClick}>Home</a></li>
                            <hr class="navbar-divider" />
                            <li><a onClick={this.stupersonalClick}>Personal Information</a></li>
                            <hr class="navbar-divider" />
                            <li><a onClick={this.stueducationalClick}>Educational Information</a></li>
                            <hr class="navbar-divider" />
                            <li><a onClick={this.stuattendanceClick}>Library</a></li>
                            <hr class="navbar-divider" />
                            <li><a onClick={this.stuiamarksClick}>Staff</a></li>
                            <hr class="navbar-divider" />
                            <li><a onClick={this.stuofficeClick}>Office</a></li>
                            <hr class="navbar-divider" />
                        </ul>
                        </aside>
                        </div>



                        <div class="card" id="Position">
                 <div class="field">
                 <p class="control has-icons-right">
                 <a class="button transparent is-medium is-danger right" onClick={this.backClick1}><span class="icon-red transparenrt is-right"><i class="fas fa-times"> </i></span></a></p>
                 </div>

                 <br></br>
                 <h2 id="TagColor">Student details</h2>
                 <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>TransactionID</th>
                            <th>studentid</th>
                            <th>School Name</th>
                            <th>Board</th>
                            <th>Year of Passing</th>
                            <th>X-Percentage</th>
                            <th>College Name</th>
                            <th>Board</th>
                            <th>Year of Passing</th>
                            <th>XII-Percentage</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.users.map(member =>
                        <tr key={member.txid}>
                        <td>{member.txid} </td>
                        <td>{member.studentid} </td>
                        <td>{member.schoolname} </td>
                        <td>{member.xboard}</td>
                        <td>{member.xyop}</td>
                        <td>{member.xper}</td>
                        <td>{member.collegename}</td>
                        <td>{member.xiiboard}</td>
                        <td>{member.xiiyop}</td>
                        <td>{member.xiiper}</td>
                        
                        </tr>
                    )}
                    </tbody>
                </table>
                  </div>

            </div>

            );
        }
    }
    
    export default StudPersonal;