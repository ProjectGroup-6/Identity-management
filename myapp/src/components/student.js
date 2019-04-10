import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import Home from './Home'
import Login from './Login'
import './App.css';
import {Row, Input, Button} from 'react-materialize'
import {Navbar,NavItem,Dropdown} from 'react-materialize'
import {SideNav,SideNavItem} from 'react-materialize'
import PersonalCard from './Personal';
import EducationalCard from './Educational';
import App from '../App'


class Student extends React.Component{
   constructor(){
      super()
      this.personalClick=this.personalClick.bind(this)
      this.educationalClick=this.educationalClick.bind(this)
      this.backClick=this.backClick.bind(this)  
      this.HomeClick=this.HomeClick.bind(this)
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


   HomeClick(event){
    ReactDOM.render(<App/>,document.getElementById('root'))
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
         <NavItem></NavItem>
         <NavItem></NavItem>
         <NavItem divider />
         <NavItem></NavItem>
         </Dropdown>
         
         <Dropdown trigger={
            <Button id="Background">Library</Button>
         }>
         <NavItem></NavItem>
         <NavItem></NavItem>
         <NavItem divider />
         <NavItem></NavItem>
         </Dropdown>

         <Dropdown trigger={
            <Button id="Background">Attendance</Button>
         }>
         <NavItem></NavItem>
         <NavItem></NavItem>
         <NavItem divider />
         <NavItem></NavItem>
         </Dropdown>

         <Dropdown trigger={
            <Button id="Background">IA marks</Button>
         }>
         <NavItem></NavItem>
         <NavItem></NavItem>
         <NavItem divider />
         <NavItem></NavItem>
         </Dropdown>

         <Dropdown trigger={
            <Button id="Background">Educational Details</Button>
         }>
         <NavItem onClick={this.educationalClick}>Add</NavItem>       
         <NavItem>Display</NavItem>
         <NavItem>Search</NavItem>
         <NavItem divider />
         <NavItem>Delete</NavItem>
         </Dropdown>
         
         <Dropdown trigger={
            <Button id="Background">Personal Details</Button>
         }>
         <NavItem onClick={this.personalClick}>Add Student</NavItem>
         <NavItem>Display</NavItem>
         <NavItem>Search</NavItem>
         <NavItem divider />
         <NavItem>Delete</NavItem>
         </Dropdown>
        </Navbar>
        
        <SideNav 
           trigger={<Button id="Position"><i class="material-icons">menu</i></Button>}
           options={{ closeOnClick: true }}
           >
           <SideNavItem userView
               user={{
                background: 'black.jpg',
                image: 'person.jpeg',
                name: 'Admin',
                email: 'Admin@gmail.com'
             }}
           />
           <SideNavItem onClick={this.HomeClick} icon='home'>Home</SideNavItem>
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

export default Student;