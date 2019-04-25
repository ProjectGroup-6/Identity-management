import React, {Component} from 'react';
import ReactDOM from 'react-dom'

import './components/App.css';
import {Row, Input, Button} from 'react-materialize'
import {Navbar,NavItem,Dropdown} from 'react-materialize'
import {SideNav,SideNavItem} from 'react-materialize'



class App extends React.Component{
  //  constructor(){
  //     super()
  //     this.personalClick=this.personalClick.bind(this)
  //     this.educationalClick=this.educationalClick.bind(this)
  //     this.backClick=this.backClick.bind(this)  
  //     this.StudentClick=this.StudentClick.bind(this)  
  //  }

  //  backClick(event){
  //     ReactDOM.render(<Login/>,document.getElementById('root'))
  //   }

  //  personalClick(event){
  //     ReactDOM.render(<PersonalCard/>,document.getElementById('root'))
  //  } 

  //  educationalClick(event){
  //     ReactDOM.render(<EducationalCard/>,document.getElementById('root'))
  //  }

  //  StudentClick(event){
  //     ReactDOM.render(<Student/>,document.getElementById('root'))
  //   }


 render(){
   return(
      <div>
        <Navbar id="Color">

        <Dropdown trigger={
            <Button id="Background" onClick={this.backClick}>Logout</Button>
         }></Dropdown>

         {/* <Dropdown trigger={
            <Button id="Background"></Button>
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
         </Dropdown> */}
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
           <SideNavItem icon='home'>Home</SideNavItem>
           <SideNavItem onClick={this.StudentClick} icon='person'>Student Information</SideNavItem>
           <SideNavItem href='#!second' icon='group'>Staff Information</SideNavItem>
           <SideNavItem href='#!second' icon='library_books'>Library</SideNavItem>
           <SideNavItem href='#!second' icon='directions_bus'>Transpoart Information</SideNavItem>
           <SideNavItem href='#!second' icon='receipt'>Office Information</SideNavItem>
           <SideNavItem divider />
           <SideNavItem subheader>Subheader</SideNavItem>
           <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
           </SideNav>

         <card id="CardDisplay">
          
         </card>
    </div>
    );
  
 }
}

export default App;
