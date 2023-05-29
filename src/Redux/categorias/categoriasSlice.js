import { createSlice } from "@reduxjs/toolkit";
import CategoriasTodas from "../../Data/Categorias";


const initialState = {
    categorias: CategoriasTodas

}

export const categoriasSlice = createSlice(
    {
        name: 'categorias',
        initialState,
        reducers:{
            getCategorias: state => state

        }
    }
)

export const {getCategorias} = categoriasSlice.actions

export default categoriasSlice.reducer;
