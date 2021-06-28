import { configureStore } from "@reduxjs/toolkit";
import searchReducer from '../features/search/searchSlice'
import ticketsReducer from '../features/tickets/ticketsSlice'

export const store = configureStore({
  reducer: {
    search: searchReducer,
    tickets: ticketsReducer
  }
})