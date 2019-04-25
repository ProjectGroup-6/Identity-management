import React from 'react'
import ReactDOM from 'react-dom'
import Sample from './Sample';
import App1 from './App1'
import Student1 from './Student1';

class PersonalCard1 extends React.Component{
    constructor(){
        super()
        this.backClick=this.backClick.bind(this)
     }

     backClick(event){
        ReactDOM.render(<Student1 />,document.getElementById('root'))
     } 

     render(){
         return(
             <div>
                 <div class="card" id="Position">
                 <div class="field">
                 <p class="control has-icons-right">
                 <a class="button transparent is-medium is-danger right" onClick={this.backClick}><span class="icon-red transparenrt is-right"><i class="fas fa-times"> </i></span></a></p>
                 </div>
                 <br></br>
                 <h2 id="TagColor">Enter Student Personal Detalis</h2>
                  <form method="POST">
                        <div>
                        <input class="input-white" type="text" placeholder="First Name" /> 
                        <input class="input-white" type="text" placeholder="Last Name" />
                        <input class="input-white" type="text" placeholder="Phone No." /> 
                        <input class="input-white" type="email" placeholder="Email" />
                        <input class="input-white" type="date" placeholder="Date-Of-Birth" />
                        <input class="input-white" type="text" placeholder="Gender" />
                        <input class="input-white" type="text" placeholder="City" /> 
                        <input class="input-white" type="text" placeholder="State" />
                        <input class="input-white" type="text" placeholder="PinCode" />
                        <input class="input-white" type="text" placeholder="Father Name" />
                        <input class="input-white" type="text" placeholder="Email" />
                        <input class="input-white" type="text" placeholder="Phone No." />
                        <input class="input-white" type="text" placeholder="Mother Name" />
                        <input class="input-white" type="text" placeholder="Email" />
                        <input class="input-white" type="text" placeholder="Phone No." />
                        <input class="input-white" type="text" placeholder="Current Address" />
                        <input class="input-white" type="text" placeholder="Permanenet Address" />
                        </div>
                        <div>
                        <button type="submit" className="btn btn-primary">Login</button>

                       </div>
                    </form> 
                 </div>
             </div>
         );
     }
   
}

export default PersonalCard1;