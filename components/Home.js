import React, {Component} from "react"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"
import { relative } from "path";

class Home extends Component{
    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
          show: false,
        };

        this.handleShow1 = this.handleShow1.bind(this);
        this.handleClose1 = this.handleClose1.bind(this);
    
        this.state = {
          show1: false,
        };
      }
    
      handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
      }
      handleClose1() {
        this.setState({ show1: false });
      }
    
      handleShow1() {
        this.setState({ show1: true });
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
            
            <Button varient="primary" onClick={this.handleShow}  style={{color: "white", backgroundColor: "rgb(63, 31, 122)",position: "relative",top: 350,left: 400}}>REGISTER</Button>
            
            <Modal show={this.state.show} onHide={this.handleClose}
            style={{width: 550,
            height:450,
            padding: 10,
            borderRadius: '25px',
            position: relative,
            margin: 0,
            left: 300,
            top: 100,
            opacity:0.95
        }}
          >
            <Modal.Header closeButton>
              <Modal.Title>Student Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group controlId="formBasicFname">
                    <Form.Label>FirstName</Form.Label>
                    <Form.Control type="text" placeholder="FirstName" />
                </Form.Group>
                <Form.Group controlId="formBasicLname">
                    <Form.Label>LastName</Form.Label>
                    <Form.Control type="text" placeholder="LastName" />
                </Form.Group>
                <Form.Group controlId="formBasicDOB">
                    <Form.Label>DOB</Form.Label>
                    <Form.Control type="date" placeholder="" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPhno">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" placeholder="Phone number" />
                </Form.Group>
                <Form.Group controlId="formBasic10thpercentage">
                    <Form.Label>10th Percentage</Form.Label>
                    <Form.Control type="number" placeholder="10th Percentage" />
                </Form.Group>
                <Form.Group controlId="formBasic12thpercentage">
                    <Form.Label>12th Percentage</Form.Label>
                    <Form.Control type="number" placeholder="12th Percentage" />
                </Form.Group>
                <Button variant="primary" type="submit" style={{backgroundColor:"rgb(63,31,122)"}}>
                    Submit
                </Button>
            </Form>

            </Modal.Body>
            <Modal.Footer>
              
            </Modal.Footer>
          </Modal>

            {"  "}            
            <Button varient="primary" onClick={this.handleShow1}  style={{color: "white", backgroundColor: "rgb(63, 31, 122)",position: "relative",top: 350,left: 400}}>LOGIN</Button>
            
            <Modal show={this.state.show1} onHide={this.handleClose1}
            style={{width: 550,
            height:450,
            padding: 10,
            borderRadius: '25px',
            position: relative,
            margin: 0,
            left: 300,
            top: 100,
            opacity:0.95
        }}
          >
            <Modal.Header closeButton>
              <Modal.Title>Login Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group controlId="formBasicUID">
                    <Form.Label>UserName</Form.Label>
                    <Form.Control type="text" placeholder="UserName" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit" style={{backgroundColor:"rgb(63,31,122)"}}>
                    Submit
                </Button>
            </Form>
            </Modal.Body>
            <Modal.Footer>
              
            </Modal.Footer>
            </Modal>
                <img src="https://png.pngtree.com/svg/20160524/33eec3259c.png" alt="pic"
                style={{ position: "relative", 
                width:250,
                height:250, top:50,left: 700}}
                />
                <img src="https://cdn4.iconfinder.com/data/icons/48-bubbles/48/31.ID-Horizontal-512.png" alt="pic"
                style={{ position: "relative", width:250, height:250, top:250,left: 450}}
                />
            
        



            </div>
            )
    }
}



export default Home