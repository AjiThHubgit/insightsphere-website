import { useState } from "react";
import { Navbar, Nav, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import BrandLogo from "../../images/brand-logo.png"

function Header() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
 
  return (
    <>
      <header className="header-wrapper"> 
        <Navbar expand="lg">
          <div className="cwrapper d-lg-flex align-items-center">
            {/* Mobile Toggle Button */}
            <Navbar.Toggle
              className="d-lg-none"
              onClick={() => setShowOffcanvas(true)}
            />            

            {/* Offcanvas Menu for Mobile */}
            <Offcanvas
              show={showOffcanvas}
              onHide={() => setShowOffcanvas(false)}
              placement="start"
              className="d-lg-none"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title><img src={BrandLogo} alt="Brand Logo" style={{width: '300px'}} /></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="nav-wrapper flex-column">
                  <Link to="/" className="nav-link" onClick={() => setShowOffcanvas(false)}>Home</Link>
                  <Link to="/services" className="nav-link" onClick={() => setShowOffcanvas(false)}>Services</Link>
                  <Link to="/blogs" className="nav-link" onClick={() => setShowOffcanvas(false)}>Blogs</Link>
                  <Link to="/contact" className="nav-link mb-3" onClick={() => setShowOffcanvas(false)}>Contact us</Link>
                  <Link to="/login" className="btn btn-primary mb-3" onClick={() => setShowOffcanvas(false)}>Log In</Link>
                  <Link to="/register" className="btn btn-outline-primary" onClick={() => setShowOffcanvas(false)}>Register</Link>
                </Nav>
              </Offcanvas.Body>
            </Offcanvas>

            {/* Desktop Navigation */}
            <Navbar.Collapse id="basic-navbar-nav" className="d-none d-lg-block">
              <Nav className="nav-wrapper">
                <Navbar.Brand as={Link} to="/">
                  <img src={BrandLogo} alt="Brand Logo" style={{width: '300px'}} />
                </Navbar.Brand>
                <div className="nav-left d-flex align-items-center">
                  <Link to="/" className="nav-link">Home</Link>
                  <Link to="/services" className="nav-link">Services</Link>
                  <Link to="/blogs" className="nav-link">Blogs</Link>
                  <Link to="/contact" className="nav-link">Contact us</Link>
                </div>
                <div className="nav-right d-flex align-items-center">
                  <Link to="/login" className="btn btn-primary me-3">Log In</Link>
                  <Link to="/register" className="btn btn-outline-primary">Register</Link>
                </div>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </header>
    </>
  );
}

export default Header;
