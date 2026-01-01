// venueSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const venueSlice = createSlice({
  name: "venue",
  initialState: [
    {
        img: "https://pixabay.com/images/download/event-venue-1597531_640.jpg",
        name: "Auditorium Hall",
        capacity: 200,
        cost: 5500,
        quantity: 0,
    },
    {
      img: "https://pixabay.com/images/download/convention-center-3908238_640.jpg",
      name: "Presentation Room",
      capacity: 50,
      cost: 700,
      quantity: 0,
    },
    {
        img: "https://www.wework.com/ideas/wp-content/uploads/sites/4/2021/08/20201008-199WaterSt-2_fb.jpg?fit=1200%2C675",
        name: "Conference Room",
        capacity: 15,
        cost: 3500,
        quantity: 0,
    },
    {
      img: "https://pixabay.com/images/download/chairs-2181916_640.jpg",
      name: "Large Meeting Room",
      capacity: 10,
      cost: 900,
      quantity: 0,
    },
    {
      img: "https://pixabay.com/images/download/laptops-593296_640.jpg",
      name: "Small Meeting Room",
      capacity: 5,
      cost: 1100,
      quantity: 0,
    },
  ],
  reducers: {
   
    incrementQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index]) {
        if (state[index].name === "Auditorium Hall" && state[index].quantity >= 3) {
          return;        
        }
        state[index].quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index] && state[index].quantity > 0) {
        state[index].quantity--;
      }
    },
  },
});

export const { incrementQuantity, decrementQuantity } = venueSlice.actions;

export default venueSlice.reducer;
