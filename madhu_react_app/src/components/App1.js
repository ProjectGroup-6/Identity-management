import ReactDOM from 'react-dom'
import React,{ Component } from 'react';
import Sample from './Sample';
import './App1.css'
import Student1 from './Student1'
import Staff from './admin_staff'
import Library from './admin_library'
import Transport from './admin_transport'
import Office from './admin_office'
import App from '../App'



class App1 extends Component{
    constructor() {
        super()
        this.backClick=this.backClick.bind(this)  
        this.StudentClick=this.StudentClick.bind(this)
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

      TransportClick(event){
        ReactDOM.render(<Transport/>,document.getElementById('root'))
      }

      OfficeClick(event){
        ReactDOM.render(<Office/>,document.getElementById('root'))
      }

      backClick(event){
        ReactDOM.render(<App/>,document.getElementById('root'))
      }
      render(){
          return( 
              <div id="background">
                  <nav id="Color" class="navbar" role="navigation" aria-label="main navigation">
                    <div  class="navbar-menu">
                        {/* <div class="navbar-start">
                        <a class="navbar-item-white">
                            Home
                        </a>

                        <a class="navbar-item-white">
                            Documentation
                        </a>

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
                    
                    <div id="Size">
                    <aside class="menu">
                        {/* <p class="menu-label">
                            General
                        </p> */}
                        <ul class="menu-list">
                            <li><a class="is-active grey"><span class="icon"><i class="fas fa-home"></i></span> Home</a></li>
                            <hr class="navbar-divider" />
                            <li><a onClick={this.StudentClick}><span class="icon"><i class="fas fa-user-graduate"></i></span> Student Information</a></li>
                            <hr class="navbar-divider" />
                            <li><a onClick={this.StaffClick}><span class="icon"><i class="fas fa-user"></i></span> Staff Information</a></li>
                            <hr class="navbar-divider" />
                            <li><a onClick={this.LibraryClick}><span class="icon"><i class="fas fa-book"></i></span> Library</a></li>
                            <hr class="navbar-divider" />
                            <li><a onClick={this.TransportClick}><span class="icon"><i class="fas fa-bus"></i></span> Transport</a></li>
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

          );

      }
}

export default App1;