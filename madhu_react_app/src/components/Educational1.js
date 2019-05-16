import React from 'react'
import ReactDOM from 'react-dom'
import Sample from './Sample';
import App1 from './App1'
import Student1 from './Student1';
import PersonalCard1 from './Personal1';
import Viewprimaryedudet from './view_primary_edu_details';
import AddBorrowDetails from '../library/addBorrowDetails'
import Library from './admin_library'
import Office from './admin_office'
import Staff from './admin_staff'


class EducationaCardl extends React.Component{
    constructor(){
        super()
        this.backClick=this.backClick.bind(this)
        this.personalClick=this.personalClick.bind(this)  

     }


     handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const data = new FormData(form);
        
        fetch('http://localhost:5000/education_details', {
            method: 'POST',
            body: data,
        })
        .then(response => response.json())
        .then(data => {
         if(data.result==0){
             alert("STudentID not found. Please enter proper studentid")
         }
         else{
             ReactDOM.render(<Viewprimaryedudet />,document.getElementById('root'))
         }
       })
      }
  
     personalClick(event){
      ReactDOM.render(<PersonalCard1 />,document.getElementById('root'))
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

      view_pri_edu_detClick(event){
        ReactDOM.render(<Viewprimaryedudet/>,document.getElementById('root'))
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
                 <a class="button transparent is-medium is-danger right" onClick={this.backClick}><span class="icon-red transparenrt is-right"><i class="fas fa-times"> </i></span></a></p>
                 </div>

                 <br></br>
                 <h2 id="TagColor">Enter Student Educational Detalis</h2>
                  <form method="POST" onSubmit={this.handleSubmit}>
                        <div>
                        <input class="input-white" name="studentid" type="text" placeholder="Student ID" /> 
                        <input class="input-white" name="name" type="text" placeholder="Name" />
                        <input class="input-white" name="phno" type="text" placeholder="Phone No." /> 
                        <input class="input-white" name="email" type="email" placeholder="Email" />
                        <input class="input-white" name="branchname" type="text" placeholder="Branch Name" />
                        <input class="input-white" name="gender" type="text" placeholder="Gender" />
                        <input class="input-white" name="schoolname" type="text" placeholder="School Nmae" /> 
                        <input class="input-white" name="xboard" type="text" placeholder="Board" />
                        <input class="input-white" name="xyop" type="text" placeholder="Year-Of-Passing" />
                        <input class="input-white" name="collegename" type="text" placeholder="College Name" />
                        <input class="input-white" name="xiiboard" type="text" placeholder="Board" />
                        <input class="input-white" name="xiiyop" type="text" placeholder="Year-Of-Passing" />
                        <input class="input-white" name="" type="text" placeholder="Institute Name" />
                        <input class="input-white" name="" type="text" placeholder="University Name" />
                        <input class="input-white" name="" type="text" placeholder="Year-Of-Passing" />
                        <input class="input-white" name="xper" type="text" placeholder="X-Standard %" />
                        <input class="input-white" name="xiiper" type="text" placeholder="XII-Standard %" />
                        <input class="input-white" name="" type="text" placeholder="Aggregate" />
                        <button type="submit" className="btn btn-primary">Submit</button>

                       </div>
                    </form> 
                 </div>
             </div>
         );
     }
   
}

export default EducationaCardl;