import { createSlice } from "@reduxjs/toolkit";
import { CantidadDeProductosTotales, ProductosPorCategoria } from "../../Data/Products";


const initialState = {
    productos: ProductosPorCategoria,
    totalProductos: CantidadDeProductosTotales
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


