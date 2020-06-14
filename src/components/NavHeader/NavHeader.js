import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {Navbar, Nav, Button} from 'react-bootstrap';
import './NavHeader.css';
import logo from './logo.jpg';
class NavHeader extends React.Component {

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }


  render() {
    
    return (
          <Navbar collapseOnSelect expand="lg" className={this.props.isTop}>
            <Navbar.Brand as={Link} to={'/'} ><img alt="" src={logo} width="70" height="70" className="d-inline-block align-top"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse ref={this.myRef} id="responsive-navbar-nav">
              <Nav className="mr-auto">
              </Nav>
              <Nav>
                <Nav.Link eventKey="1" as={NavLink} to={'/'} >Home</Nav.Link>
                <Nav.Link eventKey="2" as={NavLink} to='/aboutme' >About Me</Nav.Link>
                <Nav.Link eventKey="3" as={NavLink} to={'/Projects'} >Projects</Nav.Link>
                <Nav.Link eventKey="4" as={NavLink} to={'/Contact'} >Contact</Nav.Link>
                <Nav.Link eventKey="5" as={NavLink} to={'/Resume'} ><Button variant="outline-dark" style={{ paddingTop: 0, paddingBottom: 0}}>Resume</Button></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
      );
  }
}

export default NavHeader;