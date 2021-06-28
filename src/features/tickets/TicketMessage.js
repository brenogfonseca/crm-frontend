import React from 'react'
import { useSelector } from 'react-redux'
import { selectTickets } from './ticketsSlice'

export default function Message({ messages }) {
  if (!messages) return null
  return (
    messages.map((message, i) => {
      return <div key={i} className="message-history mt-3" >
        <div className="send font-weight-bold text-secondary " >
          <div className="sender" > {message.messageBy} </div>
          <div className="date" >{message.date}</div>
        </div>
        <div className="message" > {message.text} </div>
      </div>
    })
  )
}
