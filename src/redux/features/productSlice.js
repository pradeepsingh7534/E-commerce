import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const fetchProducts=createAsyncThunk('product/fetchProducts', ()=>{


    var res = axios.get('https://dummyjson.com/products?limit=0')

    return res;

})





const productSlice = createSlice({

    name: 'Products',
    initialState : {loading: false, arrProducts:[], error: 'error'},
    reducers: {}, 
    extraReducers : (builder)=>{

        builder.addCase(fetchProducts.pending, (state, action)=>{
            state.loading = true;
            state.arrProducts = [];
            state.error = ''
        })

        builder.addCase(fetchProducts.fulfilled, (state, action)=>{
            state.loading = false
            state.arrProducts = action.payload.data.products;
            state.error = ''
        })

        
        builder.addCase(fetchProducts.rejected, (state, action)=>{
            state.loading = false;
            state.error = "error";
            state.arrProducts = [];
        })

    }

}

)


export default productSlice.reducer;