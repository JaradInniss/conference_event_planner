import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
    {
        img: "https://pixabay.com/images/download/business-20031_640.jpg",
        name: "Projector",
        cost: 200,
        quantity: 0,
    },
    {
        img: "https://m.media-amazon.com/images/I/71hwH97fbcL._AC_SY879_.jpg",
        name: "Loud Speaker",
        cost: 80,
        quantity: 0,
    },
    {
        img: "https://m.media-amazon.com/images/I/61A8Yf-BM-L._AC_SX679_.jpg",
        name: "Microphone",
        cost: 45,
        quantity: 0,
    },
    {
        img: "https://m.media-amazon.com/images/I/61yCqEYfkeL._AC_SL1500_.jpg",
        name: "Whiteboard",
        cost: 50,
        quantity: 0,
    },
    {
        img: "https://m.media-amazon.com/images/I/61OvOswuowL._AC_SL1500_.jpg",
        name: "Signage",
        cost: 25,
        quantity: 0,
    },
  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
        const item = state[action.payload];
        if (item) {
            item.quantity += 1;
        }
    },
    decrementAvQuantity: (state, action) => {
        const item = state[action.payload];
        if (item && item.quantity > 0) {
            item.quantity -= 1;
        }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
