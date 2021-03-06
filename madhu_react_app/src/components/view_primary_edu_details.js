import React from 'react'
import ReactDOM from 'react-dom'
import Sample from './Sample';
import App1 from './App1'
import Student1 from './Student1';
import './Sample.css'
import QRcode from'./Qrcode';
import PersonalCard1 from './Personal1';
import Educational1 from "./Educational1";
import App from '../App'
import AddBorrowDetails from '../library/addBorrowDetails'
import Library from './admin_library'
import Office from './admin_office'
import Staff from './admin_staff'




class view_primary_edu_details extends React.Component{
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
        fetch('http://localhost:5000/pri_edu_det_fetch', {
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
        ReactDOM.render(<App />,document.getElementById('root'))
     } 

     

     
  
       AddBorrowDetailsClick(event){
          ReactDOM.render(<AddBorrowDetails/>,document.getElementById('root'))
        }
       
  
       backClick(event){
          ReactDOM.render(<Student1 />,document.getElementById('root'))
       } 
  
  
  
      StudentClick(event){
          ReactDOM.render(<Student1/>,document.getElementById('root'))
        }
  
        StaffClick(event){
          ReactDOM.render(<Staff/>,document.getElementById('root'))
        }
  
        LibraryClick(event){
          ReactDOM.render(<Library/>,document.getElementById('root'))
        }
  
        HomeClick(event){
          ReactDOM.render(<App1/>,document.getElementById('root'))
        }
  
        OfficeClick(event){
          ReactDOM.render(<Office/>,document.getElementById('root'))
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
                            <li><a onClick={this.HomeClick}><span class="icon"><i class="fas fa-home"></i></span> Home</a></li>
                            <hr class="navbar-divider" />
                            <li><a class="is-active grey" onClick={this.StudentClick}><span class="icon"><i class="fas fa-user-graduate"></i></span> Student Information</a></li>
                            <hr class="navbar-divider" />
                            <li><a   onClick={this.StaffClick}><span class="icon"><i class="fas fa-user"></i></span> Staff Information</a></li>
                            <hr class="navbar-divider" />
                            <li><a onClick={this.LibraryClick}><span class="icon"><i class="fas fa-book"></i></span> Library</a></li>
                            <hr class="navbar-divider" />
                            <li><a onClick={this.OfficeClick}><span class="icon"><i class="fas fa-address-book"></i></span> Office</a></li>
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

export default view_primary_edu_details;