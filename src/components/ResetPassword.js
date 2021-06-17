import React, { useState } from 'react'

import { Container, Row, Col, Form, Button } from 'react-bootstrap'

export default function ResetPassword({setFormLoad}) {
  const [email, setEmail] = useState('')

  const handleSubmit = e => {
    e.preventDefault();

    //TODO call api to submit the form
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center" >Reset Password</h1>
          <hr />
          <Form>
            <Form.Group>
              <Form.Label> Email Adress</Form.Label>
              <Form.Control 
                type="email"
                value={email}
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.currentTarget.value)}
                required
              />
            </Form.Group>
            <Button type="submit">Login</Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="#!" onClick={() => setFormLoad('login')} >Login Now</a>
        </Col>
      </Row>
    </Container>
  )
}
