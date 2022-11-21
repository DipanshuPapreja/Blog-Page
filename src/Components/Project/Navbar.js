import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'
function Navb() {

  const navitateTo = useNavigate()
  const navigate = (e, path) => {
    navitateTo(path)
  }
  return (
    <Navbar bg="light" expand="lg" style={{marginBottom:"40px"}}>
      <Container>
        <Navbar.Brand href="#home" style={{ fontSize: "1.5rem", marginRight: "10rem", fontWeight:"bold" }}>The Siren</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={(e) => navigate(e, "/home")} style={{ marginRight: "3rem", fontSize: "1.3rem", fontWeight:"bold" }}>Home</Nav.Link>
            <Nav.Link onClick={(e) => navigate(e, "/bollywood")} style={{ marginRight: "3rem", fontSize: "1.3rem" , fontWeight:"bold"}}>Bollywood</Nav.Link>
            <Nav.Link onClick={(e) => navigate(e, "/technology")} style={{ marginRight: "3rem", fontSize: "1.3rem" , fontWeight:"bold"}}>Technology</Nav.Link>
            <Nav.Link onClick={(e) => navigate(e, "/hollywood")} style={{ marginRight: "3rem", fontSize: "1.3rem" , fontWeight:"bold"}}>Hollywood</Nav.Link>
            <Nav.Link onClick={(e) => navigate(e, "/fitness")} style={{ marginRight: "3rem", fontSize: "1.3rem" , fontWeight:"bold"}}>Fitness</Nav.Link>
            <Nav.Link onClick={(e) => navigate(e, "/food")} style={{ marginRight: "3rem", fontSize: "1.3rem" , fontWeight:"bold"}}>Food</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navb;