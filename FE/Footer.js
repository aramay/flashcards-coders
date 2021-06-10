import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Footer = () => {
  return (
    <Container className="postion-absolute bottom-0 end-0" >
      <Row>
        <Col lg={true}>
          Footer..!!
        </Col>
      </Row>
    </Container>
  )
}


export default Footer
