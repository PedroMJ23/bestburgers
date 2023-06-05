import { createSlice } from "@reduxjs/toolkit";
import {
  añadirProductoAlCarrito,
  eliminarProductoDelCarrito,
  resetCostoDeEnvio,
} from "./utilidadesDelCarrito";

const precioEnvio = 400;

const initialState = {
  itemsDelCarrito: [],
  costoDeEnvio: 0,
  hidden: true,
};

const carritoSlice = createSlice({
  name: "carrito",
  initialState,
  reducers: {
    añadirAlCarrito: (state, action) => {
      return {
        ...state,
        itemsDelCarrito: añadirProductoAlCarrito(
          state.itemsDelCarrito,
          action.payload
        ),
        costoDeEnvio: precioEnvio,
      };
    },
    eliminarDelCarrito: (state, action) => {
      return {
        ...state,
        itemsDelCarrito: eliminarProductoDelCarrito(
          state.itemsDelCarrito,
          action.payload
        ),
        costoDeEnvio: resetCostoDeEnvio(state.itemsDelCarrito, precioEnvio),
      };
    },
    vaciarElCarrito: state => {
      return {
        ...state,
        itemsDelCarrito: [],
        costoDeEnvio: 0,
      };
    },
    verElCarrito: (state) => {
      return {
        ...state,
        hidden: !state.hidden,
      };
    },
  },
});

export const {
  añadirAlCarrito,
  eliminarDelCarrito,
  vaciarElCarrito,
  verElCarrito,
} = carritoSlice.actions;

export default carritoSlice.reducer;
