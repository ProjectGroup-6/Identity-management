import ReactDOM from 'react-dom'
import React,{ Component } from 'react';
import Sample from './Sample';
import './App1.css'
import Student1 from './Student1'
class App1 extends Component{
    constructor() {
        super()
        this.backClick=this.backClick.bind(this)  
        this.StudentClick=this.StudentClick.bind(this)  

      }

      StudentClick(event){
        ReactDOM.render(<Student1/>,document.getElementById('root'))
      }

      backClick(event){
        ReactDOM.render(<Sample/>,document.getElementById('root'))
      }
      render(){
          return(
              <div id="background">
                  <nav id="Color" class="navbar" role="navigation" aria-label="main navigation">
                    <div  class="navbar-menu">
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
                        <ul class="menu-list">
                            <li><a class="is-active grey">Home</a></li>
                            <hr class="navbar-divider" />
                            <li><a onClick={this.StudentClick}>Student Information</a></li>
                            <hr class="navbar-divider" />
                            <li><a>Staff Information</a></li>
                            <hr class="navbar-divider" />
                            <li><a>Library</a></li>
                            <hr class="navbar-divider" />
                            <li><a>Transport</a></li>
                            <hr class="navbar-divider" />
                            <li><a>Office</a></li>
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