import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const SeparatorSection = () => {
  return (
    <Container fluid className='grad_separator grad_border'>
      
      <div className="gradient_box_sep rounded-5 py-sm-5 py-3 px-sm-5 px-4">
        <div className='py-sm-5 py-md-3 py-2 px-xl-5 px-sm-2'>
          <div xl={7} lg={10} className='px-xl-5 px-3'>
            <div className='pb-xl-5 pb-sm-2 pb-2'>
              <h2 className='fw-bolder section_heading mb-sm-5 mb-3'>Try it for free right now!</h2>
              <p className='section_desc w-50 text-black mb-sm-5'>Test the quality of our progrom and let yourself be convinced by the
                effectiveness of our Al, start right now to generate quality content!</p>
            </div>

            <div className='d-flex flex-lg-row flex-column align-items-lg-center mt-md-5 mt-2'>
              <Button className='bg-transparent px-5 border text-black border-black rounded-2 py-sm-3 py-2 me-lg-3 mb-lg-0 mb-3 mobile_width fw-semibold fs-5'>SIGN UP WITH EMAIL</Button>
              <Button className='secondary_btn px-5 border-0 py-sm-3 py-2 mobile_width fw-semibold fs-5'>SIGN UP WITH GOOGLE</Button>
            </div>
          </div>
        </div>
      </div>

    </Container>
  )
}

export default SeparatorSection
