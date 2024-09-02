import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const  fetchShop = createAsyncThunk('shop/fetchShop', (page)=>{

      var response=  axios.get(`https://dummyjson.com/products?page=${page}`)
          return response;
})





const ShoppingSlice = createSlice({

    name: "ShoppingList",
    initialState: {loading:false, arrShop:[], error: "", page:1},
    reducers: {
        changePage : (state, action)=>{
            state.page = state.page + action.payload;
        }
    },

    extraReducers: (builder)=>{
        builder.addCase(fetchShop.pending, (state, action)=>{
            state.loading= true;
            state.arrShop = [];
            state.error = "";
        })

        builder.addCase(fetchShop.fulfilled, (state, action)=>{
            state.loading= false;
            state.arrShop = action.payload.data;
            state.error = "";

        })

        builder.addCase(fetchShop.rejected, (state, action)=>{
            state.loading= false;
            state.error = action.payload;
            state.arrShop = [];

        })
    }

})

export default ShoppingSlice.reducer;

export const {changePage} = ShoppingSlice.actions;

