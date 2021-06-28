import { createSlice } from '@reduxjs/toolkit'


const searchSlice = createSlice({
  name: 'search',
  initialState: '',
  reducers: {
    setSearchTerm: (state, action) => state = action.payload,
    clearSearchTerm: (state) => state = ''
  }
});

export const selectSearch = (state) => {
  return state.search
}



export const {
  setSearchTerm,
  clearSearchTerm
} = searchSlice.actions
export default searchSlice.reducer