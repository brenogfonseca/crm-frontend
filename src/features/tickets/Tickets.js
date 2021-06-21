import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Breadcrumbs from '../../components/Breadcrumbs'
import './tickets.css'
import TicketForm from './TicketForm'

export default function Tickets() {
  return (
    <Container>
      <Row>
        <Col>
          <Breadcrumbs page="New Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          <TicketForm />
        </Col>
      </Row>
    </Container>
  )
}
