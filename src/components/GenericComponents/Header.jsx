import React from 'react';
import { Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import IMAGES from '../../assets/index'
// import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <>
      <div className='shadow'>
        <Container className=''>
          <Navbar bg="transparent" expand="lg">
            <Navbar.Brand href="#home"><img src={IMAGES.WHITE_LOGO} alt="" /></Navbar.Brand>
            <Navbar.Toggle className='toggle_btn' aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-lg-auto ms-4">
                <Nav.Link className="active" href="/">Home</Nav.Link>
                <Nav.Link href="/blog">Blog</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link className="" href="/contact">Contact</Nav.Link>
                {/* <Link to="/about">About</Link> */}
              </Nav>
              <div className='d-flex align-items-lg-center align-items-start flex-lg-row flex-column pb-lg-0 pb-5'>
                <Button className='me-lg-3 me-0 login_btn px-4 py-2 rounded-3 mb-lg-0 mb-3' href="#link">Login</Button>
                <Button className='started_btn px-4 border-0 py-2'>Get Started</Button>
              </div>
            </Navbar.Collapse>
          </Navbar>
        </Container>

      
      </div>
    </>
  );
}

export default Header;


