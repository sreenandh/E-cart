import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const result = await axios.get("https://dummyjson.com/products");
    localStorage.setItem("allProducts",JSON.stringify(result.data.products))
    return result.data.products;
});

const productSlice = createSlice({
    name: "products",
    initialState: {
        allProducts: [],
        allProductsDummy:[],
        loading: false,
        error: ""
    },
    reducers: {
        searchProduct:(state,action)=>{
            state.allProducts=state.allProductsDummy.filter(item=>item.title.toLowerCase().includes(action.payload))
        }

    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.allProducts = action.payload;
            state.allProductsDummy = action.payload;
            state.loading = false;
            state.error = "";
        });
        builder.addCase(fetchProducts.pending, (state) => {
            state.allProducts=[]
            state.allProductsDummy=[]
            state.loading = true;
            state.error = "";
        });
        builder.addCase(fetchProducts.rejected, (state) => {
            state.allProducts = [];
            state.loading = false;
            state.error = "API Call failed...";
        });
    }
});
export const {searchProduct} = productSlice.actions
export default productSlice.reducer;