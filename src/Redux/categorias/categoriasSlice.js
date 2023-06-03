import { createSlice } from "@reduxjs/toolkit";
import CategoriasTodas from "../../Data/Categorias";


const initialState = {
    categorias: CategoriasTodas,
    categoriaSeleccionada: null

}

export const categoriasSlice = createSlice(
    {
        name: 'categorias',
        initialState,
        reducers:{
            getCategorias: state => state,
            seleccCategorias: (state, action) =>{
                return {
                    ...state,
                    categoriaSeleccionada: action.payload !== state.categoriaSeleccionada ? action.payload : null
                }
            }

        }
    }
)

export const {getCategorias, seleccCategorias} = categoriasSlice.actions

export default categoriasSlice.reducer;
