import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import IMAGES from '../../../assets'

const HeroSection = () => {

    const headerCards = [
        { img: IMAGES.CHECK_ICON, title: "Develop Publications" },
        { img: IMAGES.CHECK_ICON, title: "Perfect for Fan fiction" },
        { img: IMAGES.CHECK_ICON, title: "Write, Review and Fix Text" },
    ]

    return (
        <div className='header main'>
            <Row className='banner_content'>
                <Col lg={8} className='d-flex align-items-center justify-content-center'>
                    <div className='banner_text text-white d-flex flex-column justify-content-center align-items-start'>
                        <h1>Fast and Automatic Anime and Fantasy Writing</h1>

                        <div className='my-md-5 my-3 w-100 mobile_text_center'>
                            <p className='mb-md-2 mb-0 '>Texts written by artificial intelligence</p>
                            <p>Immediate, easy and with amazing results</p>
                        </div>

                        <div className='d-flex flex-md-row flex-column align-items-md-center w-100'>
                            <Button className='primary_btn px-5 border-0 rounded-2 py-md-3 py-2 me-md-4 mb-md-0 mb-2 mobile_width fw-semibold fs-5'>FREE TRIAL</Button>
                            <Button className='secondary_btn px-5 border-0 py-md-3 py-2 mobile_width fw-semibold fs-5'>SIGN UP WITH GOOGLE</Button>
                        </div>
                    </div>
                </Col>

                <Col lg={4} className='d-flex flex-column justify-content-xl-start justify-content-lg-center justify-content-md-start mt-xl-5 pt-xl-5 pt-lg-0 pt-5 align-items-lg-end align-items-start h-100'>
                    {headerCards.map((data) =>
                        <div className='banner_info_card text-white rounded-4 py-lg-4 py-md-3 py-2 px-4 d-flex align-items justify-content-start  mb-lg-4 mb-2'>
                            <h5 className='fw-semibold fs-5 d-flex align-items-center mb-0'>
                                <img className='me-3' src={data.img} alt="" />
                                {data.title}
                            </h5>
                        </div>
                    )}
                </Col>
            </Row>


        </div>
    )
}

export default HeroSection