import React from 'react';
import ReactDOM from 'react-dom'
import App from '../App'
import './App.css';
import {Row, Input, Button} from 'react-materialize'
import Card from '@material-ui/core/Card';
import {Navbar,NavItem} from 'react-materialize'
import './Home'
import Popup from "reactjs-popup";

class Login extends React.Component{
  constructor(){
    super()
    this.homeClick=this.homeClick.bind(this)
 }

  

 homeClick(event){
  ReactDOM.render(<App/>,document.getElementById('root'))
}
  render(){
    return(
      <div>
      <p id="Heading">
        Identity Management
      </p>
      <p><q id="Tagline"> Secure Your Identity </q></p>
      <Navbar id="Color" right>
      <NavItem href="">Sign UP</NavItem>
      <NavItem href='#'>Sign IN</NavItem>
      </Navbar>

      <Card id="a">
        <form method="">
        <Row>
        <h5 id="left">Get Your Access</h5>
        <Input s={12} label="Username" title="TextColor"/>
        <Input type="password" label="password" s={12} title="TextColor"/>
        </Row>
        <div id="left"><Button waves='light' onClick={this.homeClick}>Login</Button></div><br></br>
        </form>
    </Card>

    <Popup trigger={<button> Trigger</button>} position="right center">
    <div>
    <Card id="a">
  <form method="">
    <Row>
    <h5 id="left">Registration Page</h5>
    <Input s={6} label="First Name" />
    <Input s={6} label="Last Name" />
    <Input label="Phone No." s={6} /><br></br>
    <Input type="radio" label="Male" name="gender" value="male" s={3} />
    <Input type="radio" label="Female" name="gender" value="female"s={3} />
    <Input type="email" label="Email" s={12} />
    <Input type="password" label="password" s={12} />
    </Row>
    <div id="left"><Button waves='light'>submit</Button></div><br></br>
    </form>
  </Card>
    </div>
  </Popup>

  </div>
    );
  }
}

export default Login;