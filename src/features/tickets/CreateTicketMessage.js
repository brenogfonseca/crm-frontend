import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { updateTicketMessage } from './ticketsSlice'

export default function CreateTicketMessage({ ticket }) {
  const [ticketMessage, setTicketMessage] = useState('')
  const dispatch = useDispatch()
  const transformDate = (date) => {
    const offset = date.getTimezoneOffset()
    date = new Date(date.getTime() - (offset * 60 * 1000))
    return date.toISOString().split('T')[0]
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let date = new Date()
    date = transformDate(date)
    dispatch(updateTicketMessage({
      ticketId: ticket.id,
      date,
      text: ticketMessage,
      messageBy: 'client'
    }))
    setTicketMessage('')
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Label>Reply</Form.Label>
      <Form.Text>Please type your reply here to update the ticket</Form.Text>
      <Form.Control
        as="textarea"
        rows="5"
        value={ticketMessage}
        onChange={(e) => setTicketMessage(e.target.value)}
      />
      <div className="text-right mt-4 mb-3" >
        <Button variant="info" type="submit" >Reply</Button>
      </div>
    </Form>
  )
}
