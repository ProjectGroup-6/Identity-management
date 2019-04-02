import React from 'react'
import ReactDOM from 'react-dom'
import {Row, Input, Button} from 'react-materialize'
import Card from '@material-ui/core/Card';
import './Personal.css'
import App from '../App';

class PersonalCard extends React.Component{

    constructor(){
        super()
        this.backClick=this.backClick.bind(this)  
     }
  
     backClick(event){
        ReactDOM.render(<App/>,document.getElementById('root'))
     } 

    render(){
        return(
            <div>
            <Card id="CardDisplay">
            <form method="">
              <Row>
              <a class="waves-effect waves-red btn-flat right" onClick={this.backClick}><i class="material-icons">close</i></a><br></br>
              <h5 id="left">Enter your Personal Details</h5>
              <Input s={4} label="First Name*" />
              <Input s={4} label="Last Name*" />
              <Input label="Phone No." s={4} />
              <Input type="email" label="Email" s={4} />
              <Input type="date" label="Date-of-birth" s={4} />
              <Input type="radio" label="Male" name="gender" value="male" s={1.5} />
              <Input type="radio" label="Female" name="gender" value="female"s={1.5} />
              <Input type="radio" label="Others" name="gender" value="others"s={1.5} /></Row>
              <Row>
              <Input s={4} label="City" />
              <Input s={4} label="State" />
              <Input label="Pin Code" s={4} />
              <Input s={4} label="Father Name" />
              <Input label="Phone No." s={4} />
              <Input type="email" label="Email" s={4} />
              <Input s={4} label="Mother Name" />
              <Input label="Phone No." s={4} />
              <Input type="email" label="Email" s={4} />
              <Input label="Current Address" s={12} />
              <Input label="Permanent Address" s={12} />
              </Row>
              <div id="left"><Button waves='light'>submit</Button></div><br></br>
              </form>
            </Card>
            </div>
        );
    }
}

export default PersonalCard;