import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../../components/Breadcrumbs'
import SearchForm from '../search/SearchForm'
import { selectFilteredTickets } from './ticketsSlice'
import TicketTable from './TicketTable'

export default function ListTickets() {
  const tickets = useSelector(selectFilteredTickets)

  return (
    <Container>
      <Row>
        <Col>
          <Breadcrumbs page="Ticket Lists" />
        </Col>
      </Row>
      <Row className="mt-4" >
        <Col>
          <Link to="/create-ticket" >
            <Button variant="info">Add New Ticket</Button>
          </Link>
        </Col>
        <Col className="text-right" >
          <SearchForm />
        </Col>
      </Row>
      <Row>
        <Col>
          <TicketTable tickets={tickets} />
        </Col>
      </Row>
    </Container>
  )
}
