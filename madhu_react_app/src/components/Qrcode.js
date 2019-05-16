import './qrcode.css';
import React from 'react'
import ReactDOM from 'react-dom'
import Sample from './Sample';
import App from '../App'
import Student1 from './Student1';
import './Sample.css'
import QRcode from'./Qrcode';
import Educational1 from "./Educational1";
import AddBorrowDetails from '../library/addBorrowDetails'
import Office from './admin_office'
import Staff from './admin_staff'
import Library from './admin_library'
import Transport from './admin_transport'
import App1 from './App1'
// var React = require('react');
var QRCode = require('qrcode.react');


class Qrcode extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            student_id: 'this.props.student_id',
            // txid: this.props.student_id.txid
           
          };
      }

    educationalClick(event){
        ReactDOM.render(<Educational1 />,document.getElementById('root'))

    }

    StudentClick(event){
        ReactDOM.render(<Student1/>,document.getElementById('root'))
      }

      StaffClick(event){
        ReactDOM.render(<Staff/>,document.getElementById('root'))
      }

      OfficeClick(event){
        ReactDOM.render(<Office/>,document.getElementById('root'))
      }

      LibraryClick(event){
        ReactDOM.render(<Library/>,document.getElementById('root'))
      }

      TransportClick(event){
        ReactDOM.render(<Transport/>,document.getElementById('root'))
      }

      HomeClick(event){
        ReactDOM.render(<App1/>,document.getElementById('root'))
      }

      AddBorrowDetailsClick(event){
        ReactDOM.render(<AddBorrowDetails/>,document.getElementById('root'))
      }

   

     backClik1(event){
        ReactDOM.render(<Sample />,document.getElementById('root'))
     } 

     backClick(event){
        ReactDOM.render(<App />,document.getElementById('root'))
     } 
    render() {
        console.log(this.state.student_id)
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
                           <li><a onClick={this.StaffClick}><span class="icon"><i class="fas fa-user"></i></span> Staff Information</a></li>
                           <hr class="navbar-divider" />
                           <li><a onClick={this.LibraryClick}><span class="icon"><i class="fas fa-book"></i></span> Library</a></li>
                           <hr class="navbar-divider" />
                           <li><a  onClick={this.OfficeClick}><span class="icon"><i class="fas fa-address-book"></i></span> Office</a></li>
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

                <div class="card">
                
                <header class="card-header">
                   <p class="card-header-title">
                       Qrcode for Student 
                   </p>
                </header>
                <center class="vertical-center">
                
                <QRCode value='{}' />
                </center>
                <footer class="card-footer">
                  <a href="#" class="card-footer-item">Save</a>
                  <a href="#" class="card-footer-item">Home</a>
                 </footer>
                 
            </div>
            </div>
        );
            

            // <div class="card">
                
            //     <header class="card-header">
            //        <p class="card-header-title">
            //            Qrcode for Student 
            //        </p>
            //     </header>
            //     <center>
            //     <QRCode value="APRAMEYA N KATTI,cs" />
            //     </center>
            //     <footer class="card-footer">
            //       <a href="#" class="card-footer-item">Save</a>
            //       <a href="#" class="card-footer-item">Home</a>
            //      </footer>
                 
            // </div>
          
    
    }
}

export default Qrcode;