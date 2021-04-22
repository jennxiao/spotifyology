import React, {useRef} from "react"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { buildPageSpacing, spacing, fontStyles, colors } from '../styles/index.tsx';
import { css } from 'emotion';

function NavigationBar() {

  // styles = css`
  //   background-color: ${colors.leaf};
  // `;

  const navbar = {backgroundColor: '#000000',  opacity: "50%" };
    
    
  return (
    <Navbar style={navbar}  fixed="top" variant="dark" expand="lg">
      <Navbar.Brand href="/home">Spotifyology</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link href="/Jennifer">Jennifer</Nav.Link>
            <Nav.Link href="/David"> David </Nav.Link>
            <Nav.Link href="/Jasper"> Jasper </Nav.Link>
            <Nav.Link href="/Jasmine"> Jasmine </Nav.Link>
            <Nav.Link href="/Tiffanie"> Tiffanie </Nav.Link>
            <Nav.Link href="/Tiffany"> Tiffany </Nav.Link>
            <Nav.Link href="/Tiffany"> Sady </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
 
export default NavigationBar;