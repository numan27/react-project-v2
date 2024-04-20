import React from 'react'
import {Container, Row, Col} from "react-bootstrap"

function Footer() {
  return (
    <div className='footer gradient_padding_t'>

            <Container className='mb-5 pb-sm-5 pb-2 pt-sm-5 pt-0 mt-md-0 mt-sm-5 footer_text'>
                <Row className='mt-md-0 mt-sm-5 mt-0 pt-md-0 pt-sm-5 pt-0'>
                    <Col md={3}>
                        <h3 className='fw-bold text-white'>CLIENTS</h3>
                        <ul className='list-unstyled text-secondary mt-4'>
                            <li><a href="">Login</a></li>
                            <li><a href="">Sign up</a></li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h3 className='fw-bold text-white'>SOCIAL MEDIA</h3>
                        <ul className='list-unstyled text-secondary mt-4'>
                            <li><a href="">Twitter</a></li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h3 className='fw-bold text-white'>LEGAL INFO</h3>
                        <ul className='list-unstyled text-secondary mt-4'>
                            <li><a href="">Legal information</a></li>
                            <li><a href="">Terms & Conditions</a></li>
                            <li><a href="">Privacy Policy</a></li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h3 className='fw-bold text-white'>SUPPORT</h3>
                        <ul className='list-unstyled text-secondary mt-4'>
                            <li><a href="">Helpdesk</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <hr className='m-0' />
            <div className='text-white py-sm-4 py-3'>
                <Container className='d-flex align-items-center justify-content-md-start justify-content-center py-2'>
                    <p className='mb-0'>T22 All rights reserved.</p>
                </Container>
            </div>
        </div>
  )
}

export default Footer
