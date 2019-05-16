import ReactDOM from 'react-dom'
import React,{ Component } from 'react';
import Sample from './Sample';
import './App1.css'
import PersonalCard1 from './Personal1'
import EducationalCard1 from './Educational1'
import View_pri_edu_det from './view_primary_edu_details'
import AddBorrowDetails from '../library/addBorrowDetails'
import Staff from './admin_staff'
import Library from './admin_library'
import Transport from './admin_transport'
import Office from './admin_office'
import App1 from './App1'
import App from '../App'


import './sample1.css'
import QRcode from'./Qrcode';




class Student1 extends React.Component{
    constructor(){
        super()
        this.backClick=this.backClick.bind(this)
        this.backClick1=this.backClick.bind(this)
        this.LibraryClick=this.LibraryClick.bind(this)
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
        ReactDOM.render(<PersonalCard1/>,document.getElementById('root'))
     } 

     HomeClick(event){
        ReactDOM.render(<App1/>,document.getElementById('root'))
      }

      view_pri_edu_detClick(event){
        ReactDOM.render(<View_pri_edu_det/>,document.getElementById('root'))
      }

      StaffClick(event){
        ReactDOM.render(<Staff/>,document.getElementById('root'))
      }

      LibraryClick(event){
        ReactDOM.render(<Library/>,document.getElementById('root'))
      }

      TransportClick(event){
        ReactDOM.render(<Transport/>,document.getElementById('root'))
      }

      OfficeClick(event){
        ReactDOM.render(<Office/>,document.getElementById('root'))
      }

  
     educationalClick(event){
        ReactDOM.render(<EducationalCard1/>,document.getElementById('root'))
     }
  

      backClick(event){
        ReactDOM.render(<App/>,document.getElementById('root'))
      }

      AddBorrowDetailsClick(event){
        ReactDOM.render(<AddBorrowDetails/>,document.getElementById('root'))
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
                            
                            <a class="navbar-item">
                                Search Record
                            </a>
                            {/* <a class="navbar-item">
                                Delete Record
                            </a> */}
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
                            
                            <a class="navbar-item" onClick={this.view_pri_edu_detClick}>
                                View Details
                            </a>
                            <a class="navbar-item">
                                Search Record
                            </a>
                            {/* <a class="navbar-item">
                                Delete Record
                            </a> */}
                            </div>
                            </div>

                            

                        

                        <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link">
                            Library
                            </a>

                            <div class="navbar-dropdown">
                            <a class="navbar-item" onClick={this.AddBorrowDetailsClick}>
                                Add Borrow Details
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

                        


                        </div>
                        <div class="navbar-item" >
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
                            <li onClick={this.HomeClick}><a><span class="icon"><i class="fas fa-home"></i></span> Home</a></li>
                            <hr class="navbar-divider" />
                            <li><a class="is-active grey"><span class="icon"><i class="fas fa-user-graduate"></i></span> Student Information</a></li>
                            <hr class="navbar-divider" />
                            <li onClick={this.StaffClick}><a><span class="icon" ><i class="fas fa-user"></i></span> Staff Information</a></li>
                            <hr class="navbar-divider" />
                            <li onClick={this.LibraryClick}><a><span class="icon" ><i class="fas fa-book"></i></span> Library</a></li>
                            <hr class="navbar-divider" />
                            <li onClick={this.OfficeClick}><a><span class="icon"><i class="fas fa-address-book"></i></span> Office</a></li>
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



                 <div class="card" id="Position" style={{color : 'black'}}>
                 <div id="scroll">
                 <div class="field">
                 <p class="control has-icons-right">
                 <a class="button transparent is-medium is-danger right" onClick={this.backClick1}><span class="icon-red transparenrt is-right"><i class="fas fa-times"> </i></span></a></p>
                 </div>

                 <br></br>
                 <h2 id="TagColor" >Student details</h2>
                 </div>
                 <div>
                 <table className="table table-hover" >
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
                        </tr>
                    )}
                    </tbody>
                </table>
                </div>
                  </div>
             </div>
         );
     }
   
}

export default Student1;