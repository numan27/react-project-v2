import React from 'react'
import IMAGES from "../assets/index"
import { Col, Row } from 'react-bootstrap'

const FeatureCards = () => {

    const FeatureCards = [
        { icon: IMAGES.FEATURE_ICON_1, title: "Full Stories", desc: "Interesting and complex, with a good development and ending" },
        { icon: IMAGES.FEATURE_ICON_2, title: "Posting", desc: "Interesting and complex, with a good development and ending" },
        { icon: IMAGES.FEATURE_ICON_3, title: "Feedback", desc: "Interesting and complex, with a good development and ending" },
        { icon: IMAGES.FEATURE_ICON_3, title: "Feedback", desc: "Interesting and complex, with a good development and ending" },
      
    ]

    return (
        <div className='my-sm-5 my-3 py-sm-5 py-4 featureCards'>
            <Row className='d-flex flex-md-row flex-column justify-content-between align-items-center px-md-0 px-3'>
                <Col md={6} className='mb-md-0 mb-4'>
                    <h2 className='fw-bolder mb-0 section_heading'>Quality Content <br /> In just One click</h2>
                </Col>

                <Col md={6} className=''>
                    <p className='fs-5 mb-0 section_desc'>Wether you need it urgently or just don't like to wait, our AI takes just seconds to deliver a complete work, no more waiting in commission queue.</p>
                </Col>
            </Row>

            <div className='card_wrapper mt-sm-5 my-3 pt-sm-5 py-4'>

                {FeatureCards.map((items) =>
                    <div className='feature_item bg-secondary rounded-4 d-flex flex-column align-items-start'>
                        <span className='bg-black p-3 rounded-circle d-flex align-items-center justify-content-center'>
                            <img className='' src={items.icon} alt="" />
                        </span>
                        <h3 className='my-3 fw-bold fs-4'>{items.title}</h3>
                        <p className='section_desc'>{items.desc}</p>
                    </div>
                )}


            </div>
        </div>
    )
}

export default FeatureCards