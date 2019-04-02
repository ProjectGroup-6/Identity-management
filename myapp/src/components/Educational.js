import React from 'react'
import ReactDOM from 'react-dom'
import {Row, Input, Button} from 'react-materialize'
import Card from '@material-ui/core/Card';
import './Personal.css'
import App from '../App';

class EducationalCard extends React.Component{

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
              <h5 id="left">Enter your Educational Details</h5>
              <Input s={4} label="Student ID" />
              <Input label="Name" s={4} />
              <Input type="email" label="Email" s={4} />
              <Input label="Phone No." s={4} />
              <Input s={4} label="Branch Name" />
              <Input type="radio" label="Male" name="gender" value="male" s={1.5} />
              <Input type="radio" label="Female" name="gender" value="female"s={1.5} />
              <Input type="radio" label="Others" name="gender" value="others"s={1.5} /></Row>
              <Row>
              <Input label="School Name" s={4} />
              <Input label="Board" s={4} />
              <Input label="Year of passing" s={4} />
              <Input label="College Name" s={4} />
              <Input label="Board" s={4} />
              <Input label="Year of passing" s={4} />
              <Input label="Institute Name" s={4} />
              <Input label="University Name" s={4} />
              <Input label="Year of passing" s={4} />
              <Input label="X-Standard %" s={4} />
              <Input label="XII / Diploma %" s={4} />
              <Input label="UG Aggregate" s={4} />
              </Row>
              <div id="left"><Button waves='light'>submit</Button></div><br></br>
              </form>
            </Card>
            </div>
        );
    }
}

export default EducationalCard;