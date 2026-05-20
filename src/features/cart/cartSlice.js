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
		addToCartAll: (state, action) => {
			localStorage.setItem(
				"cartList",
				JSON.stringify([...state.cartList, ...action.payload]),
			);
			state.cartList = [...state.cartList, ...action.payload];
		},

		incrementItem: (state, action) => {
			const updateList = state.cartList.map((item) => {
				if (item.id == action.payload) {
					//1
					return {
						...item,
						quantity: item.quantity + 1,
						subtotal: (item.quantity + 1) * item.price,
					};
				}
				return item;
			});

			state.cartList = updateList;

			localStorage.setItem("cartList", JSON.stringify(state.cartList));
		},
		decrementItem: (state, action) => {
			const updateList = state.cartList.map((item) => {
				if (item.id == action.payload) {
					if (item.quantity == 1) {
						return item;
					}
					return {
						...item,
						quantity: item.quantity - 1,
						subtotal: (item.quantity - 1) * item.price,
					};
				} else {
					return item;
				}
			});

			state.cartList = updateList;

			localStorage.setItem("cartList", JSON.stringify(state.cartList));
		},
	},
});

// Action creators are generated for each case reducer function
export const { addToCart, addToCartAll, incrementItem, decrementItem } =
	cartSlice.actions;

export default cartSlice.reducer;
