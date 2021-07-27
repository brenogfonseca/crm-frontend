import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Breadcrumbs from '../../components/Breadcrumbs'
import CreateTicketMessage from './CreateTicketMessage'
import TicketMessage from './TicketMessage'
import { selectTickets } from './ticketsSlice'

export default function Ticket() {
  const { tId } = useParams()
  const { tickets } = useSelector(selectTickets)
  const ticket = tickets.find(ticket => {
    return ticket.id == tId
  })
  return (
    <Container>
      <Row>
        <Col>
          <Breadcrumbs page="Ticket" />
        </Col>
      </Row>
      <Row>
        <Col className="text-weight-bolder text-secondary" >
          <div className="subject">Subject: {ticket.subject} </div>
          <div className="date">Ticket Openened: {ticket.addedAt}</div>
          <div className="status">Status: {ticket.status}</div>
        </Col>
        <Col className="text-right" >
          <Button variant="outline-info" > Close Ticket</Button>
        </Col>
      </Row>
      <Row className="mt-4" >
        <Col>
          <TicketMessage messages={ticket.messages} />
        </Col>
      </Row>
      <hr />
      <Row className="mt-4" >
        <Col>
          <CreateTicketMessage ticket={ticket} />
        </Col>
      </Row>

    </Container>
  )
}
