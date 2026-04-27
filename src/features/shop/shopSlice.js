import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeMenu: 'All',
}

export const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    activeCategory: (state, action) => {
        state.activeMenu = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { activeCategory } = shopSlice.actions

export default shopSlice.reducer