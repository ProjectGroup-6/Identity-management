import React from 'react'
import ReactDOM from 'react-dom'
import Sample from './Sample';
import App1 from './App1'
import Student1 from './Student1';
import './Sample.css'
import QRcode from'./Qrcode';
import Educational1 from "./Educational1";
import AddBorrowDetails from '../library/addBorrowDetails'
import App from '../App'
import Qrcode from './Qrcode';
var QRCode = require('qrcode.react');


class PersonalCard1 extends React.Component{
    constructor(props){
        super(props);
        this.backClick=this.backClick.bind(this)
        this.backClick1=this.backClick.bind(this)
        
     }
  
     
    educationalClick(event){
        ReactDOM.render(<Educational1 />,document.getElementById('root'))
    }

   

     backClik1(event){
        ReactDOM.render(<App />,document.getElementById('root'))
     } 

     backClick(event){
        ReactDOM.render(<Student1 />,document.getElementById('root'))
     } 

     AddBorrowDetailsClick(event){
        ReactDOM.render(<AddBorrowDetails/>,document.getElementById('root'))
      }




     handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const data = new FormData(form);
        
        fetch('http://localhost:5000/upload', {
            method: 'POST',
            body: data,
        })
        .then(response => response.json())
        .then(data => {
         if(data.result==0){
             alert("Details not entered. Please enter")
         }
         else{
             console.log(data.tx_id);
             var user ={
                student_id : data.result,
                txid: data.tx_id
             };
           
             ReactDOM.render(<Student1 />,document.getElementById('root'))
             
         }
       });
      }

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
                            <li><a><span class="icon"><i class="fas fa-home"></i></span> Home</a></li>
                            <hr class="navbar-divider" />
                            <li><a class="is-active grey"><span class="icon"><i class="fas fa-user-graduate"></i></span> Student Information</a></li>
                            <hr class="navbar-divider" />
                            <li><a><span class="icon"><i class="fas fa-user"></i></span> Staff Information</a></li>
                            <hr class="navbar-divider" />
                            <li><a><span class="icon"><i class="fas fa-book"></i></span> Library</a></li>
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
                 <h2 id="TagColor">Enter Your Personal Detalis</h2>
                  <form method="POST" onSubmit={this.handleSubmit}>
                        <div>
                        <input class="input-white" name="studentid" type="text" placeholder="StudentID" /> 
                        <input class="input-white" name="First Name" type="text" placeholder="First Name" /> 
                        <input class="input-white" name="Last Name" type="text" placeholder="Last Name" />
                        <input class="input-white" name="Phone No" type="text" placeholder="Phone No." /> 
                        <input class="input-white" name="Email" type="email" placeholder="Email" />
                        <input class="input-white" name="Date-Of-Birth" type="date" placeholder="Date-Of-Birth" />
                        <input class="input-white" name="Gender" type="text" placeholder="Gender" />
                        <input class="input-white" name="City" type="text" placeholder="City" /> 
                        <input class="input-white" name="State" type="text" placeholder="State" />
                        <input class="input-white" name="PinCode" type="text" placeholder="PinCode" />
                        <input class="input-white" name="Father Name" type="text" placeholder="Father Name" />
                        <input class="input-white" name="Father Email" type="text" placeholder="Email" />
                        <input class="input-white" name="Father Phone No" type="text" placeholder="Phone No." />
                        <input class="input-white" name="Mother Name" type="text" placeholder="Mother Name" />
                        <input class="input-white" name="Mother Email" type="text" placeholder="Email" />
                        <input class="input-white" name="Mother Phone No" type="text" placeholder="Phone No." />
                        <input class="input-white" name="Current Address" type="text" placeholder="Current Address" />
                        <input class="input-white" name="Permanenet Address" type="text" placeholder="Permanenet Address" />
                        <button type="submit" className="btn btn-primary">Submit</button>
                       </div>
                    </form> 
                 </div>
             </div>
         );
     }
   
}

export default PersonalCard1;