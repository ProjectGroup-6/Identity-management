import React from 'react'
import ReactDOM from 'react-dom'
import Student1 from './Student1';


class EducationaCardl extends React.Component{
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
                 <h2 id="TagColor">Enter Student Educational Detalis</h2>
                  <form method="POST">
                        <div>
                        <input class="input-white" type="text" placeholder="Student ID" /> 
                        <input class="input-white" type="text" placeholder="Name" />
                        <input class="input-white" type="text" placeholder="Phone No." /> 
                        <input class="input-white" type="email" placeholder="Email" />
                        <input class="input-white" type="text" placeholder="Branch Name" />
                        <input class="input-white" type="text" placeholder="Gender" />
                        <div>
                        <input class="input-white" type="text" placeholder="School Nmae" /> 
                        <input class="input-white" type="text" placeholder="Board" />
                        <input class="input-white" type="text" placeholder="Year-Of-Passing" />
                        <input class="input-white" type="text" placeholder="College Name" />
                        <input class="input-white" type="text" placeholder="Board" />
                        <input class="input-white" type="text" placeholder="Year-Of-Passing" />
                        <input class="input-white" type="text" placeholder="Institute Name" />
                        <input class="input-white" type="text" placeholder="University Name" />
                        <input class="input-white" type="text" placeholder="Year-Of-Passing" />
                        <input class="input-white" type="text" placeholder="X-Standard %" />
                        <input class="input-white" type="text" placeholder="XII-Standard %" />
                        <input class="input-white" type="text" placeholder="Aggregate" />
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>


                       </div>
                    </form> 
                 </div>
             </div>
         );
     }
   
}

export default EducationaCardl;