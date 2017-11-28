import React, { Component } from 'react';
import CreateEvent from './CreateEvent.jsx';
import Register from './Register.jsx';
import Login from './Login.jsx';
import Logo from './black.png'
import { Input, Modal, Button } from "react-materialize";



class Modals extends Component {


  render() {    
    return (
      <nav className="navclass">
        <div className = "navigation-bar">
          <div className="logo">
            <img className="logoimg" src={Logo} />
          </div>
          <ul id="nav-mobile" className= "right hide-on-med-and-down">
            <li>
              <Modal
                header='Modal Header'
                trigger={<Button className="buttons">REGISTER</Button>}>
                <Register />
              </Modal>
            </li>

          <Modal
            header='Modal Header'
            trigger={<Button className="buttons">CREATE EVENT</Button>}>
            <CreateEvent />
          </Modal>

          <Modal
            header='Modal Header'
            trigger={<Button className="buttons">LOGIN</Button>}>
            <Login />
          </Modal>
          </ul>
        </div>
      </nav>
    )
  };
}


export default Modals;
