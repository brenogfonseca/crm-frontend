import { createSlice, current } from '@reduxjs/toolkit'
import tickets from '../../assets/data/dummy-tickets.json'
import { selectSearch } from '../search/searchSlice';


const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: {
    tickets: tickets
  },
  reducers: {
    updateTicketMessage: (state, action) => {
      const stateToChange = state.tickets.find(ticket => {
        return ticket.id === action.payload.ticketId
      })
      stateToChange.messages.push(action.payload);
    }
  }
});

export const selectTickets = (state) => state.tickets

export const selectFilteredTickets = (state) => {
  const tickets = selectTickets(state)
  const searchTerm = selectSearch(state)
  return tickets.tickets.filter(ticket => {
    return ticket.subject.toLowerCase().includes(searchTerm.toLowerCase())
  }
  )
}

export const {
  updateTicketMessage
} = ticketsSlice.actions
export default ticketsSlice.reducer