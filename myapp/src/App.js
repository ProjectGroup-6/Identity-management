import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import Home from './components/Home'
import Login from './components/Login'
import './components/App.css';
import {Row, Input, Button} from 'react-materialize'
import {Navbar,NavItem,Dropdown} from 'react-materialize'
import {SideNav,SideNavItem} from 'react-materialize'
import PersonalCard from './components/Personal';
import EducationalCard from './components/Educational';


class App extends React.Component{
   constructor(){
      super()
      this.personalClick=this.personalClick.bind(this)
      this.educationalClick=this.educationalClick.bind(this)
      this.backClick=this.backClick.bind(this)  
   }

   backClick(event){
      ReactDOM.render(<Login/>,document.getElementById('root'))
    }

   personalClick(event){
      ReactDOM.render(<PersonalCard/>,document.getElementById('root'))
   } 

   educationalClick(event){
      ReactDOM.render(<EducationalCard/>,document.getElementById('root'))
   }

 render(){
   return(
      <div>
        <Navbar id="Color">

        <Dropdown trigger={
            <Button id="Background" onClick={this.backClick}>Logout</Button>
         }></Dropdown>

         <Dropdown trigger={
            <Button id="Background">Office</Button>
         }>
         <NavItem>Add Student</NavItem>
         <NavItem></NavItem>
         <NavItem divider />
         <NavItem></NavItem>
         </Dropdown>
         
         <Dropdown trigger={
            <Button id="Background">Library</Button>
         }>
         <NavItem>Add Student</NavItem>
         <NavItem></NavItem>
         <NavItem divider />
         <NavItem></NavItem>
         </Dropdown>

         <Dropdown trigger={
            <Button id="Background">Attendance</Button>
         }>
         <NavItem>Add Student</NavItem>
         <NavItem></NavItem>
         <NavItem divider />
         <NavItem></NavItem>
         </Dropdown>

         <Dropdown trigger={
            <Button id="Background">IA marks</Button>
         }>
         <NavItem>Add Student</NavItem>
         <NavItem></NavItem>
         <NavItem divider />
         <NavItem></NavItem>
         </Dropdown>

         <Dropdown trigger={
            <Button id="Background">Educational Details</Button>
         }>
         <NavItem onClick={this.educationalClick}>Add</NavItem>
         <NavItem>Delete</NavItem>
         <NavItem divider />
         <NavItem>Search</NavItem>
         </Dropdown>
         
         <Dropdown trigger={
            <Button id="Background">Personal Details</Button>
         }>
         <NavItem onClick={this.personalClick}>Add Student</NavItem>
         <NavItem>Delete</NavItem>
         <NavItem divider />
         <NavItem>Search</NavItem>
         </Dropdown>
        </Navbar>
        
        <SideNav 
           trigger={<Button id="Position"><i class="material-icons">menu</i></Button>}
           options={{ closeOnClick: true }}
           >
           <SideNavItem userView
              /* user={{
                 background: 'img/office.jpg',
                 image: 'img/yuna.jpg',
                 name: 'John Doe',
                 email: 'jdandturk@gmail.com'
              }} */
           />
           <SideNavItem href='#' icon='home'>Home</SideNavItem>
           <SideNavItem href='#!second' icon='person'>Student Information</SideNavItem>
           <SideNavItem href='#!second' icon='group'>Staff Information</SideNavItem>
           <SideNavItem href='#!second' icon='library_books'>Library</SideNavItem>
           <SideNavItem href='#!second' icon='directions_bus'>Transpoart Information</SideNavItem>
           <SideNavItem href='#!second' icon='receipt'>Office Information</SideNavItem>
           <SideNavItem href='#!second' icon='feedback'>Feedback</SideNavItem>
           <SideNavItem href='#!second' icon='contact_phone'>Contact Us</SideNavItem>
           <SideNavItem divider />
           <SideNavItem subheader>Subheader</SideNavItem>
           <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
           </SideNav>

         <card id="CardDisplay">
           <table>
              <tr>
                 <th>Student-ID</th>
                 <th>Name</th>
                 <th>Phone No.</th>
                 <th>E-mail</th>
                 <th>Date-of-birth</th>
                 <th>Sex</th>
              </tr>
           </table>
         </card>
    </div>
    );
  
 }
}

export default App;