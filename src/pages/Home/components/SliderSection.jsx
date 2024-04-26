import React from 'react'
import { Col, Row } from 'react-bootstrap'
import IMAGES from '../../../assets'
import { FaStar } from "react-icons/fa";
// import SlickSlider from './SlickSlider';

const SliderSection = () => {
    const businessCards = [
        {
            img: IMAGES.CLIENT,
            name: "Lauren Andrews",
            company: "Unicorn Exchange",
            title: "A 2 week copy project finished in 2 days with jasper",
            descr: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bo",
            date: "Dated: 04/21/2023"
        },
        {
            img: IMAGES.CLIENT_2,
            name: "Harry Wilson",
            company: "Quality Imports",
            title: "A big project for quality services for your help here",
            descr: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bo",
            date: "Dated: 01/15/2023"
        },
        {
            img: IMAGES.CLIENT_3,
            name: "Kate Gomez",
            company: "Best Exchange",
            title: "A good company for quality services and ranking no 1",
            descr: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bo",
            date: "Dated: 07/22/2022"
        },
        {
            img: IMAGES.CLIENT_4,
            name: "Sara Sammy",
            company: "Quality Insurance",
            title: "Insurance services under 1 roof with awesome feedback",
            descr: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bo",
            date: "Dated: 06/05/2022"
        },
        {
            img: IMAGES.CLIENT_5,
            name: "Karim Kishan",
            company: "Support Exchange",
            title: "A big project for quality services for your help here",
            descr: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bo",
            date: "Dated: 03/21/2021"
        },
        {
            img: IMAGES.CLIENT_6,
            name: "Julia Jack",
            company: "Unicorn Exchange",
            title: "A 5 week project finished quickly with bootstrap",
            descr: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bo",
            date: "Dated: 05/20/2021"
        }
    ]
    return (
        <div className='slider_section position-relative gradient_padding_t gradient_padding_b'>
            <div className='main py-3'>

                {/* Gradient Box */}
                <div className='gradientBox rounded-5 px-xl-5 px-sm-4 px-3 mobile_text_center py-lg-4 mb-lg-5 mb-0 text-white'>
                    <Row className='d-flex align-items-center py-2'>
                        <Col lg={6}>
                            <div className='px-lg-4 px-sm-2 px-1 py-lg-4 py-2'>
                                <h2 className='fw-bolder section_heading'>
                                    Within the reach of any anime fan Easy to use and effective
                                </h2>
                            </div>
                        </Col>

                        <Col lg={6} className='mb-lg-4 mb-0'>
                            <div>
                                <p className='my-xl-5 my-4 pe-xl-5 section_desc text-white'>
                                    Our Al will enhance the quality of your fan fiction or your post, it can create an interesting backstory or it can even advise you on how to continue with your text or conversation
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>

                {/* Cards */}
                <div className='mt-sm-3'>
                    <h1 className='text-white text-center'>What they say about us</h1>

                    <div className='my-sm-5 my-3 py-sm-5 py-3 card_wrapper '>
                        {businessCards.map((items) =>
                            <div className=' bg-white card-wrapperbg rounded-3 slider_item'>
                                <div className='d-flex align-items-center'>
                                    <img width={55} height={55} className='rounded-circle me-3' src={items.img} alt='client-photo' />
                                    <div>
                                        <h4 className='mb-1'>{items.name}</h4>
                                        <p className='mb-0'>{items.company}</p>
                                    </div>
                                </div>
                                <div className='star_group text-nowrap my-2'>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                                <div>
                                    <h6 className='mb-4 fw-bold fs-5'>{items.title}</h6>
                                    <p className='card_desc'>{items.descr}
                                    </p>
                                    <h6 className='mb-1 font-monospace'>{items.date}</h6>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SliderSection
