import {createSlice, createAsyncThunk } from '@reduxjs/toolkit'; 
import axios from 'axios';

const url = 'http://127.0.0.1:3000/greetings';

const initialState = {
 greet: 'N/A',
 Loading: false,
};

export const getGreetingsData = createAsyncThunk(
 'countries/countriesData',
 async () => {
   try {
     const response = await axios.get(`${url}`);
     return response.data;
   } catch (error) {
     return error;
   }
 },
);

const greetingSlice = createSlice({
 name: 'greetings',
 initialState,

 extraReducers: {
   [getGreetingsData.fulfilled]:
   (state, { payload }) => ({
     greet: payload,
     Loading: false,
   }),

   [getGreetingsData.pending]: (
    (state,) => ({
     greet: "N/A",
     Loading: true,
   })),

 }
});

export default greetingSlice.reducer;