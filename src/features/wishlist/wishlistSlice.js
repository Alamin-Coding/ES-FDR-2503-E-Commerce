import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	wishList:
		localStorage.getItem("wishList") ?
			JSON.parse(localStorage.getItem("wishList"))
		:	[],
};

export const wishSlice = createSlice({
	name: "wish",
	initialState,
	reducers: {
		addTowishlist: (state, action) => {
			localStorage.setItem(
				"wishList",
				JSON.stringify([...state.wishList, action.payload]),
			);
			state.wishList = [...state.wishList, action.payload];
		},
		deleteWishlistItem: (state, action) => {
			state.wishList = state.wishList.filter(
				(item) => item.id !== action.payload,
			);
			localStorage.setItem("wishList", JSON.stringify([...state.wishList]));
		},
	},
});

// Action creators are generated for each case reducer function
export const { addTowishlist, deleteWishlistItem } = wishSlice.actions;

export default wishSlice.reducer;
