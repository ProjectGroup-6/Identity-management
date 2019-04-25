import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import App1 from './App1'
import './Sample.css'

class Sample extends Component {
  constructor() {
    super()
    this.state = {
      firstname: '',
      phone: ''
    }
    this.homeClick=this.homeClick.bind(this)

  }

  homeClick(event){
    ReactDOM.render(<App1/>,document.getElementById('root'))
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    // get form data out of state
    const { firstname, phone } = this.state;
  }


      render() {
        const { classes } = this.props;
        const { firstname, phone } = this.state;
        return (
            <div id="color">
              <div class='student'>
                  <h2>Sign in</h2>
                  <form method="POST" onSubmit={this.onSubmit}>
                      <input id='firstname' name='UserName' placeholder='UserName' type='text'/>
                      <input id='phone' name='Password' placeholder='Password' type='password'/>
                      <button type="submit" className="btn btn-primary" onClick={this.homeClick}>Submit</button>
                    </form> 
              </div>
        </div>
        );
      }
    }

    export default Sample;



	
