import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cartList:
		localStorage.getItem("cartList") ?
			JSON.parse(localStorage.getItem("cartList"))
		:	[],
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			// setItem('cartList', JSON.stringify([...state.cartList, action.payload]));
			// set local storage
			localStorage.setItem(
				"cartList",
				JSON.stringify([...state.cartList, action.payload]),
			);
			state.cartList = [...state.cartList, action.payload];
		},
	},
});

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
