import React, { Component } from "react"

class Age extends Component{
    constructor(props)
    {
        super();
        this.state={
            age: props.initialAge,
            status: 0
        }
    }
    makeOlder(){
        this.setState({age: this.state.age + 3});
        this.setState({status: this.state.status + 1});
    }
    render()
    {
        return(
            <div>
                <p>Your age is:{this.state.age}</p>
                <p>status:{this.state.status}</p>
                <button onClick={() => this.makeOlder()}>Make me older</button>
            </div>
        )
    }
}
export default Age