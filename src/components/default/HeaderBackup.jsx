import { useState } from "react";
import { Navbar, Nav, Offcanvas, Dropdown } from "react-bootstrap";
import { RiArrowRightSLine, RiArrowDownSLine } from "react-icons/ri";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Header() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [activeMenu, setActiveMenu] = useState("main");

  return (
    <>
      <header className="header-wrapper">
        <Navbar expand="lg">
          <div className="cwrapper d-lg-flex align-items-center">
            <Navbar.Toggle onClick={() => setShowOffcanvas(true)} />

            {/* Offcanvas Menu for Mobile */}
            {/* <Offcanvas
              show={showOffcanvas}
              onHide={() => {
                setShowOffcanvas(false);
                setActiveMenu("main");
              }}
              placement="start"
              style={{ width: "100%" }}
            >
              <Offcanvas.Header closeButton>
                {activeMenu !== "main" && (
                  <button
                    className="btn btn-link p-0"
                    onClick={() => setActiveMenu("main")}
                  >
                    ← Back
                  </button>
                )}
                <Offcanvas.Title>
                  {activeMenu === "main" ? "Menu" : activeMenu}
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                {activeMenu === "main" ? (
                  <Nav className="nav-wrapper flex-column">
                    <Link to="/about" className="nav-link">Home</Link>
                    <div className="menu-item" onClick={() => setActiveMenu("Services")}>
                      Services <RiArrowRightSLine className="fs16 float-end" />
                    </div>
                    <div className="menu-item" onClick={() => setActiveMenu("About Us")}>
                      About Us <RiArrowRightSLine className="fs16 float-end" />
                    </div>
                  </Nav>
                ) : (
                  <div className="submenu">
                    <Link to="/action1" className="nav-link">Action 1</Link>
                    <Link to="/action2" className="nav-link">Action 2</Link>
                    <Link to="/something-else" className="nav-link">Something Else</Link>
                  </div>
                )}
              </Offcanvas.Body>
            </Offcanvas> */}

            {/* Desktop Navigation */}
            <Navbar.Collapse id="basic-navbar-nav" className="d-none d-lg-block">
              <Nav className="nav-wrapper">
                <Navbar.Brand as={Link} to="/">
                  React-Bootstrap
                </Navbar.Brand>

                <div className="nav-left d-flex align-items-center">
                  <Link to="/" className="nav-link">Home</Link>
                  {/* <Dropdown>
                    <Dropdown.Toggle className="tdropdown">
                      Services <RiArrowDownSLine className="fs16" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item as={Link} to="/services/action">Action</Dropdown.Item>
                      <Dropdown.Item as={Link} to="/services/another-action">Another action</Dropdown.Item>
                      <Dropdown.Item as={Link} to="/services/something-else">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown> */}

                  <Link to="/career" className="nav-link">Servies</Link>
                  <Link to="/career" className="nav-link">Blogs</Link>
                  <Link to="/career" className="nav-link">Contact us</Link>

                  {/* <Dropdown>
                    <Dropdown.Toggle className="tdropdown">
                      About <RiArrowDownSLine className="fs16" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item as={Link} to="/about-us">About Us</Dropdown.Item>
                      <Dropdown.Item as={Link} to="/contact">Contact Us</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown> */}
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
