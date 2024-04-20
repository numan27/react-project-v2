import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaGreaterThan } from "react-icons/fa"

const Stats = () => {

    const statsData = [
        {
            count: "20+",
            desc: "AI and Machine Learning Patterns",
            icon: ""
        },
        {
            count: "76+",
            desc: "Users approve and use regularly AI writing",
            icon: ""
        },
        {
            count: "96%",
            desc: "Proven accuracy",
            icon: <FaGreaterThan />,
        },
        {
            count: "67",
            desc: "Industry leading eNPS score",
            icon: "",
        },
    ]

    return (
        <div className='stats_section mt-sm-5 mt-4 pt-sm-5 pt-4 gradient_padding_b'>
            <div className='main py-3'>
                <Row className='d-flex align-items-center'>
                    <Col lg={6} className=''>
                        <div className='px-2'>
                            <h2 className='fw-bolder section_heading'>Fantasy Stories and Anime Post Specialized Al</h2>
                        </div>
                    </Col>

                    <Col lg={6} className='mb-lg-0 mb-sm-5 mb-4'>
                        <div>
                            <p className='my-xl-5 my-4 pe-xl-5 section_desc'>Our artificial intelligence can complete, start continue or make from scratch a good anime and fantasy story, a reddit post or an answer to conversations.</p>
                        </div>
                    </Col>
                </Row>

                <Row className='stats_wrapper my-sm-5 gx-5 mobile_text_center'>

                    {statsData.map((items) => (
                        <Col md={3} className='pe-sm-5'>
                            <h2 className='fw-bolder stats_heading mb-sm-4'> {items?.icon}  {items.count}</h2>
                            <p className="section_desc">{items.desc}</p>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    )
}

export default Stats
