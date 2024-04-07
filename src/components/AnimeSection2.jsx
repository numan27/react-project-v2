import React from 'react'
import IMAGES from "../assets/index"
import { Col, Row } from 'react-bootstrap'

const AnimeSection2 = () => {
  return (
    <div className=''>
      <Row className='d-flex flex-md-row flex-column justify-content-between align-items-center'>

        <Col lg={6} className='pe-lg-5'>
          <div className='pe-xl-5 pe-0 px-2'>
            <h2 className='mb-xl-5 mb-4 fw-bolder section_heading'>Animate Text in ablink Automatic and Immediate</h2>
            <p className='my-xl-5 my-4 pe-xl-5 section_desc'>The technology our AI assure a great writing, without waiting, without creative block, instant content only</p>
          </div>
        </Col>

        <Col lg={6} className='mb-lg-0 mb-sm-5 mb-4'>
          <img className='w-100' src={IMAGES.ANIME_2} alt="" />
        </Col>
      </Row>
    </div>
  )
}

export default AnimeSection2
