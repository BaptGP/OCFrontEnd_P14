import { createSlice } from "@reduxjs/toolkit";
const data = [
  {
    name: {
      firstName: "John",

      lastName: "Doe",
    },

    address: "261 Erdman Ford",

    city: "East Daphne",

    state: "Kentucky",
    id: 0,
  },

  {
    name: {
      firstName: "Jane",

      lastName: "Doe",
    },

    address: "769 Dominic Grove",

    city: "Columbus",

    state: "Ohio",
    id: 1,
  },

  {
    name: {
      firstName: "Joe",

      lastName: "Doe",
    },

    address: "566 Brakus Inlet",

    city: "South Linda",

    state: "West Virginia",
    id: 2,
  },

  {
    name: {
      firstName: "Kevin",

      lastName: "Vandy",
    },

    address: "722 Emie Stream",

    city: "Lincoln",

    state: "Nebraska",
    id: 3,
  },

  {
    name: {
      firstName: "Joshua",

      lastName: "Rolluffs",
    },

    address: "32188 Larkin Turnpike",

    city: "Charleston",

    state: "South Carolina",
    id: 4,
  },
];
export const userSlice = createSlice({
  name: "user",
  initialState: data,
  reducers: {
    create: (state, action) => {
      state.push({...action.payload, id:state[state.length - 1].id + 1})
    },
  },
});

export const { create } = userSlice.actions;

export const selectState = (state) => state.user;

export default userSlice.reducer;
