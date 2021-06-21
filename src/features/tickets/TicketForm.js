import React, { useState } from 'react'
import { Jumbotron, Form, Button, Row, Col } from 'react-bootstrap'

export default function TicketForm() {
  const [subject, setSubject] = useState('')
  const [foundAt, setFoundAt] = useState('')
  const [details, setDetails] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Jumbotron className="mt-3 form-ticket" >
      <Form autoComplete="off" onSubmit={handleSubmit} >
        <Form.Group as={Row} >
          <Form.Label column sm={3} > Subject</Form.Label>
          <Col sm={9} >
            <Form.Control
              value={subject}
              placeholder="Subject"
              onChange={(e) => setSubject(e.currentTarget.value)}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} >
          <Form.Label column sm={3} > Issue Found At</Form.Label>
          <Col sm={9} >
            <Form.Control
              type="date"
              value={foundAt}
              placeholder="Password"
              onChange={(e) => setFoundAt(e.currentTarget.value)}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} >
          <Form.Label column sm={3} > Details</Form.Label>
          <Col sm={9} >
            <Form.Control
              as="textarea"
              value={details}
              rows="5"
              onChange={(e) => setDetails(e.currentTarget.value)}
              required
            />
          </Col>
        </Form.Group>
        <Button type="submit" variant="info" block >Login</Button>
      </Form>
    </Jumbotron>
  )
}
