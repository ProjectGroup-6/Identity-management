import React from 'react'
import ReactDOM from 'react-dom'
import Sample from './Sample';
import './App1.css'
import Student1 from './Student1';
import './sample1.css'
import QRcode from'./Qrcode';
import PersonalCard1 from './Personal1';
import Educational1 from "./Educational1";




class ViewStudentDetails extends React.Component{
    constructor(){
        super()
        this.backClick=this.backClick.bind(this)
        this.backClick1=this.backClick.bind(this)
        this.state = {
            users: []
        }

     }

     componentDidMount() {
        let self = this;
        fetch('http://localhost:5000/fetch', {
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

     personalClick(event){
        ReactDOM.render(<PersonalCard1 />,document.getElementById('root'))
    }
     
    educationalClick(event){
        ReactDOM.render(<Educational1 />,document.getElementById('root'))
    }

  
     
     backClik1(event){
        ReactDOM.render(<Sample />,document.getElementById('root'))
     } 

     backClick(event){
        ReactDOM.render(<Student1 />,document.getElementById('root'))
     } 



    //  handleSubmit(event) {
    //     event.preventDefault();
    //     const form = event.target;
    //     const data = new FormData(form);
        
    //     fetch('http://localhost:5000/upload', {
    //         method: 'POST',
    //         body: data,
    //     })
    //     .then((result) => {
    //         ReactDOM.render(<QRcode />,document.getElementById('root'))
    //     });
    //   }

     render(){
         return(
             <div>
                 <div>
                  <nav id="Color" class="navbar" role="navigation" aria-label="main navigation">
                    <div  class="navbar-menu">
                        <div class="navbar-end">
                        <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link">
                            Personal Details
                            </a>

                            <div class="navbar-dropdown">
                            <a class="navbar-item" onClick={this.personalClick}>
                                Add Personal Details
                            </a>
                            <a class="navbar-item" onClick={this.ViewStudentDetails}>
                                View Details
                            </a>
                            <a class="navbar-item">
                                Search Record
                            </a>
                            <a class="navbar-item">
                                Delete Record
                            </a>
                            </div>
                            </div>

                        <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link">
                            Educational Details
                            </a>

                            <div class="navbar-dropdown">
                            <a class="navbar-item" onClick={this.educationalClick}>
                                Add Educational Details
                            </a>
                            
                            <a class="navbar-item">
                                View Details
                            </a>
                            <a class="navbar-item">
                                Search Record
                            </a>
                            <a class="navbar-item">
                                Delete Record
                            </a>
                            </div>
                            </div>

                            <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link">
                            IA Marks
                            </a>

                            <div class="navbar-dropdown">
                            <a class="navbar-item">
                                <p>1<sup>st</sup> Year</p>
                            </a>
                            <hr class="navbar-divider" />

                            <a class="navbar-item">
                            <p>2<sup>st</sup> Year</p>
                            </a>
                            <hr class="navbar-divider" />

                            <a class="navbar-item">
                            <p>3<sup>st</sup> Year</p>
                            </a>
                            <hr class="navbar-divider" />

                            <a class="navbar-item">
                            <p>4<sup>st</sup> Year</p>
                            </a>
                            </div>
                        </div>

                        <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link">
                            Attendance
                            </a>

                            <div class="navbar-dropdown">
                            <a class="navbar-item">
                            <p>1<sup>st</sup> Year</p>
                            </a>
                            <hr class="navbar-divider" />

                            <a class="navbar-item">
                            <p>2<sup>st</sup> Year</p>
                            </a>
                            <hr class="navbar-divider" />

                            <a class="navbar-item">
                            <p>3<sup>st</sup> Year</p>
                            </a>
                            <hr class="navbar-divider" />

                            <a class="navbar-item">
                            <p>4<sup>st</sup> Year</p>
                            </a>
                            </div>
                        </div>

                        <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link">
                            Library
                            </a>

                            <div class="navbar-dropdown">
                            <a class="navbar-item">
                                Book Issues
                            </a>
                            <a class="navbar-item">
                                Book Returns
                            </a>
                            <a class="navbar-item">
                                Dues
                            </a>
                            <a class="navbar-item">
                                Book Details
                            </a>
                            </div>
                        </div>

                        <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link">
                            Office
                            </a>

                            <div class="navbar-dropdown">
                            <a class="navbar-item">
                                Student Fee Records
                            </a>
                            <a class="navbar-item">
                                Fee Payments
                            </a>
                            <a class="navbar-item">
                                Recipts
                            </a>
                            <a class="navbar-item">
                                Fee Details
                            </a>
                            </div>
                        </div>


                        </div>
                        <div class="navbar-item">
                            <div class="buttons">
                            <a class="navbar-item-white" onClick={this.backClick}>
                                <strong>Logout</strong>
                            </a>
                            </div>
                        </div>
                        </div>
                    </nav>
                    
                    <div id="Size">
                    <aside class="menu">
                        {/* <p class="menu-label">
                            General
                        </p> */}
                        <ul class="menu-list">
                            <li><a><span class="icon"><i class="fas fa-home"></i></span> Home</a></li>
                            <hr class="navbar-divider" />
                            <li><a class="is-active grey"><span class="icon"><i class="fas fa-user-graduate"></i></span> Student Information</a></li>
                            <hr class="navbar-divider" />
                            <li><a><span class="icon"><i class="fas fa-user"></i></span> Staff Information</a></li>
                            <hr class="navbar-divider" />
                            <li><a><span class="icon"><i class="fas fa-book"></i></span> Library</a></li>
                            <hr class="navbar-divider" />
                            <li><a><span class="icon"><i class="fas fa-bus"></i></span> Transport</a></li>
                            <hr class="navbar-divider" />
                            <li><a><span class="icon"><i class="fas fa-address-book"></i></span> Office</a></li>
                            <hr class="navbar-divider" />

                        </ul>
                        {/* <p class="menu-label">
                            Administration
                        </p>
                        <ul class="menu-list">
                            <li><a>Team Settings</a></li>
                            <li>
                            <a class="is-active">Manage Your Team</a>
                            <ul>
                                <li><a>Members</a></li>
                                <li><a>Plugins</a></li>
                                <li><a>Add a member</a></li>
                            </ul>
                            </li>
                            <li><a>Invitations</a></li>
                            <li><a>Cloud Storage Environment Settings</a></li>
                            <li><a>Authentication</a></li>
                        </ul> */}
                     
                        </aside>
                        </div>
              </div>    



                 <div class="card" id="Position">
                 <div class="field">
                 <p class="control has-icons-right">
                 <a class="button transparent is-medium is-danger right" onClick={this.backClick1}><span class="icon-red transparenrt is-right"><i class="fas fa-times"> </i></span></a></p>
                 </div>

                 <br></br>
                 <h2 id="TagColor" >Student details</h2>
                 <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>TransactionID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Student Email</th>
                            <th>DOB</th>
                            <th>Gender</th>
                            <th>Father Name</th>
                            <th>Father Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.users.map(member =>
                        <tr key={member.txid}>
                        <td>{member.txid} </td>
                        <td>{member.firstname} </td>
                        <td>{member.lastname}</td>
                        <td>{member.studentemail}</td>
                        <td>{member.dob}</td>
                        <td>{member.gender}</td>
                        <td>{member.fathername}</td>
                        <td>{member.fatherphone}</td>
                        <td><a>Edit</a>|<a>Delete</a></td>
                        </tr>
                    )}
                    </tbody>
                </table>
                  </div>
             </div>
         );
     }
   
}

export default ViewStudentDetails;