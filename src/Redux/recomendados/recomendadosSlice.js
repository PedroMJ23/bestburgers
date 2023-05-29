import { createSlice } from "@reduxjs/toolkit";
import products from "../../Data/Products";

const initialState = {
  recomendados: Array(4)
    .fill(0)
    .reduce((acc, _item) => {
      const IDs = acc.map((valor) => valor.id);
      let nuevosRecomendados;
      do {
        nuevosRecomendados = {
          ...products[Math.floor(Math.random() * products.length)],
        };
      } while (IDs.includes(nuevosRecomendados.id));
      return [...acc, nuevosRecomendados];
    }, []),
};

export const recomendadosProdSlice = createSlice({
  name: "recomendados",
  initialState,
  reducers: {
    recomendadosAlAzar: state => state
  },
});

export const { recomendadosAlAzar } = recomendadosProdSlice.actions;

export default recomendadosProdSlice.reducer;
