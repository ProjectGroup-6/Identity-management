import React, { Component } from "react";
import { relative } from "path";

class Header extends Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-md bg-dark navbar-dark ">
                <a className="navbar-brand" href="#">
                <img src="https://www.bodhtree.com/wp-content/uploads/2018/08/Identity_management_solutions.x77676.png" alt="Logo" style={{width:40}}/> IDM</a>
                
                <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#" style={{color: "white"}}>Link1</a>
                            
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" style={{color: "white"}}>Link2</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" style={{color: "white"}}>Link3</a>
                        </li>
                    </ul>
                </div>
                </nav>
                
            </div>
        )
    }
}
export default Header