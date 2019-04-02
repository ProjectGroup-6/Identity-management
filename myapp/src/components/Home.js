import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import Login from './Login'
import {Row, Input, Button} from 'react-materialize'
import {Navbar,NavItem} from 'react-materialize'
import {SideNav,SideNavItem} from 'react-materialize'
import './App.css';


class Home extends React.Component{
    constructor(){
      super()
      this.homeClick=this.homeClick.bind(this)
   }

   homeClick(event){
      ReactDOM.render(<Login/>,document.getElementById('root'))
   }
    render(){
        return(
            <div>
            <Navbar id="Color" right>
            <NavItem href="">Personal Details</NavItem>
            <NavItem href="">Educational Details</NavItem>
            <NavItem href="">IA marks</NavItem>
            <NavItem href="">Attendance</NavItem>
            <NavItem href="">Transpoart</NavItem>
            <NavItem href="">Library</NavItem>
            <NavItem href="">Office</NavItem>
            <NavItem href='#'>Logout</NavItem>
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
               <SideNavItem href='#!icon' icon='home'>Home</SideNavItem>
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
        </div>
        );
    }
}

export default Home;