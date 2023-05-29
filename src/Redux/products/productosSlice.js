import { createSlice } from "@reduxjs/toolkit";
import products from "../../Data/Products";

const initialState = {
    productos: products,
    totalProductos: products.length
    }

export const productosSlice = createSlice(
    {
        name: 'productos',
        initialState,
        reducers:{
            getProductos: state => state
        }
    }
)

export const {getProductos} = productosSlice.actions

export default productosSlice.reducer;


