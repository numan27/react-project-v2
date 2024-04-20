
import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { Row, Col } from "react-bootstrap"
import IMAGES from '../../../assets'

function AnimeSection() {
    return (
        <div className=''>
            <Row className='d-flex flex-md-row flex-column justify-content-between align-items-center'>
                <Col lg={6} className='mb-lg-0 mb-sm-5 mb-4'>
                    <img className='w-100' src={IMAGES.ANIME} alt="" />
                </Col>

                <Col lg={6} className=''>
                    <div className='px-xl-5 px-2'>
                        <h2 className='mb-xl-5 mb-4 fw-bolder section_heading'>Animation Section of About Page</h2>
                        <p className='my-xl-5 my-4 pe-xl-5 section_desc'>The technology our AI assure a great writing, without waiting, without creative block, instant content only</p>

                        <div className='mb-5'>
                            <h5 className='fw-bold fs-5 d-flex align-items-center'>
                                <img className='me-3 pt-1' src={IMAGES.CHECK_ICON_2} alt="" />
                                Powered by GPT-3 from OpenAI
                            </h5>
                            <h5 className='fw-bold fs-5 d-flex align-items-center my-sm-3 my-2'><img className='me-3 pt-1' src={IMAGES.CHECK_ICON_2} alt="" />Different genres and tones</h5>
                            <h5 className='fw-bold fs-5 d-flex align-items-center'><img className='me-3 pt-1' src={IMAGES.CHECK_ICON_2} alt="" />
                                To publsih on networks or use them in your campaigns</h5>
                        </div>

                        <a className='fw-bold fs-5 animeLink' href="">Read More <FaLongArrowAltRight /> </a>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default AnimeSection

