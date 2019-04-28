import React, { Component } from "react"
import Home from "./components/Home"
import "./components/test.css"


class App extends Component{
  
  render(){
    
    return(
      <div className="bg-img">
            <Home selectList = {{selectedOption : 'Admin',options: ['Admin', 'Student']}}/> 
      </div>
    )
  }

}
export default App