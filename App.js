import React, { Component } from "react"
import Header from "./components/Header"
import Home from "./components/Home"
import Registration from "./components/Registration"
import "./test.css"
class App extends Component{
  
  render(){
    
    return(
      <div className="bg-img">
        
            <Header/>
            <Home/>
            
      </div>
    )
  }

}
export default App