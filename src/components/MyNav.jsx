import React from 'react'
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const MyNav = (props) => {
  return (
    <>
      <div className="shadow">
        {['lg'].map((expand) => (
          <Navbar key={expand} bg={`${props.mode}`} variant={`${props.mode}`} expand={expand} className="mb-3">
            <Container fluid>
              <Navbar.Brand><strong>{props.title}</strong></Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    {props.title}
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <ul className="navbar-nav me-auto mx-2 mb-lg-0">
                      <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/About">About</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/Contact">Contact</Link>
                      </li>
                    </ul>
                  </Nav>

                  <Form.Check type="switch" id="custom-switch" label={`${props.mode === 'light' ? "Darkmode" : "Lightmode"}`} className={`my-2 me-4 text-${props.mode === 'light' ? 'dark' : 'light'}`} onClick={props.toggleDark}/>
                  <Button className="btn btn-info">Sign in</Button>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </div>
    </>
  )
}

export default MyNav

MyNav.prototype = {
  title: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired
}

MyNav.defaultProps = {
  title: 'Set Title Here',
  contact: 'Set Contact Here'
};