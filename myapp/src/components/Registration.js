import React, {Component} from 'react';
import './Registration.css';
import {Row, Input, Button} from 'react-materialize'
import Card from '@material-ui/core/Card';
import './home'

function Registration(){
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
}



export default Registration;