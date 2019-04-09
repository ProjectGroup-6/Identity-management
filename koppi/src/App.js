import React, { Component } from "react"
import Header from "./components/Header"
import Home from "./components/Home"
import "./test.css"
import Age from "./components/Age"
import Select from "./components/Select"
class App extends Component{
  
  render(){
    
    return(
      <div className="bg-img">
        
            <Header/>
            <Home selectList = {{selectedOption : 'Admin',options: ['Admin', 'Student', 'Faculty']}}/>
            {/*<Age initialAge={25}/>*/}
      </div>
    )
  }

}
export default App