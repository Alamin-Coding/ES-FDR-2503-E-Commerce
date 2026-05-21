import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: localStorage.getItem("cartList")
    ? JSON.parse(localStorage.getItem("cartList"))
    : [],
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
    incrimentItem: (state, action) => {
      const updateList = state.cartList.map((item) => {
        if (item.id === action.payload) {
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
    if (item.id === action.payload) {

      // quantity 1 এর নিচে নামবে না
      if (item.quantity <= 1) {
        return item;
      }

      return {
        ...item,
        quantity: item.quantity - 1,
        subtotal: (item.quantity - 1) * item.price,
      };
    }

    return item;
  });

  state.cartList = updateList;

  localStorage.setItem(
    "cartList",
    JSON.stringify(state.cartList)
  );
},
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, incrimentItem, decrementItem } = cartSlice.actions;

export default cartSlice.reducer;
