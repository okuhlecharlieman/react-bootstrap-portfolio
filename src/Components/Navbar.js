import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../App.css"

function PortNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="MyNav "  sticky="top" >
      <Container   >
        <Navbar.Brand href="#home"><img src="https://i.ibb.co/pXwhH3s/android-chrome-512x512.png" alt="logo-image" width="60px"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#service">Services</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Icons</Nav.Link>
        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PortNavbar;