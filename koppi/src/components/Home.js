import React, {Component} from "react"


class Home extends Component{
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: this.props.selectList.selectedOption,
      options: this.props.selectList.options
    };
    

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({selectedOption: event.target.value});
  }

  handleSubmit(event) {
    alert('You have selected: ' + this.state.selectedOption);
    event.preventDefault();
  }


    render()
    { 
      return(
            <div className="main">
              <div className="text_content">
                  <p class="display-5 text-white">
                  “<span style={{color: 'rgb(27, 170, 144)',fontSize: 70,fontWeight: "bold"}}>B</span>e yourself,
                  <br/><span style={{color: 'rgb(27, 170, 144)',fontSize: 60, fontWeight: "bold"}}>E</span>veryone else is already taken.”
                  <br/>-Oscar Wilde
                  </p>  
              </div>

              <div class='login'>
                <h2>Sign in</h2>
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label for="user">UserType</label><br/>
                    <select className="form-control" id="user" value={this.state.selectedOption} onChange={this.handleChange}>
                      { this.state.options.map((option) => <option>{option}</option>)}
                    </select>
                  </div>
                <input id='uid' name='uid' placeholder='UserID' type='text'/>
                <input id='pw' name='password' placeholder='Password' type='password'/>
                <button type="submit" className="btn btn-primary">Submit</button>
                <a class='forgot' href='#'>Forgot your password?</a>
                </form>  
              </div>
            </div>
            )
    }
}



export default Home