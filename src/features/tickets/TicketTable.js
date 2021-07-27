import React from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function TicketTable({ tickets }) {
  return (
    <Table striped bordered hover >
      <thead>
        <tr>
          <th>#</th>
          <th>subject</th>
          <th>status</th>
          <th>Opened Date</th>
        </tr>
      </thead>
      <tbody>
        {tickets.length ? tickets.map(ticket =>
          <tr key={ticket.id} >
            <td>{ticket.id}</td>
            <Link to={`/ticket/${ticket.id}`} >
              <td>{ticket.subject}</td>
            </Link>
            <td>{ticket.status}</td>
            <td>{ticket.addedAt}</td>
          </tr>
        ) :
          <tr>
            <td colSpan="4" className="text-center" > No Tickets To Show</td>
          </tr>}
      </tbody>
    </Table >
  )
}
