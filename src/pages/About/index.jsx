import React from 'react'
import AppLayout from '../../components/AppLayout/AppLayout'
import AnimeSection from './components/AnimeSection'
import { Container } from 'react-bootstrap'

const About = () => {
  return (
    <AppLayout>
      <Container className='my-5'>
        <AnimeSection />
      </Container>
    </AppLayout>
  )
}

export default About