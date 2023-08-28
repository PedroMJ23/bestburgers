import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ordenes: [],
};

let lastOrderId = 0; // Variable para mantener un contador de IDs únicos

const ordenesSlice = createSlice({
  name: "ordenes",
  initialState,
  reducers: {
    agregarOrden: (state, action) => {
      const nuevaOrden = { ...action.payload, id: ++lastOrderId };
      state.ordenes.push(nuevaOrden);
    },
    eliminarOrden: (state, action) => {
      const ordenId = action.payload;
      state.ordenes = state.ordenes.filter((orden) => orden.id !== ordenId);
    },
    // Puedes agregar más reducers aquí si es necesario
  },
});

export const { agregarOrden, eliminarOrden } = ordenesSlice.actions;

export default ordenesSlice.reducer;
