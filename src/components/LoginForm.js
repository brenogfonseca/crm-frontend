import React, { useState } from 'react'

import { Container, Row, Col, Form, Button } from 'react-bootstrap'

export default function LoginForm({setFormLoad}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = e => {
    e.preventDefault();

    //TODO call api to submit the form
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center" >Client Login</h1>
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
            <Form.Group>
              <Form.Label> Password</Form.Label>
              <Form.Control 
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.currentTarget.value)}
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
          <a href="#!" onClick={() => setFormLoad('reset')}>Forget Password?</a>
        </Col>
      </Row>
    </Container>
  )
}
