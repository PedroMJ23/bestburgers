import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoriasReducer from "./categorias/categoriasSlice";

import storage from 'redux-persist/lib/storage';
import persistStore from "redux-persist/es/persistStore";
import productosReducer from "./products/productosSlice";
import { persistReducer } from "redux-persist";
import  recomendadosReducer  from "./recomendados/recomendadosSlice";
import carritoReducer from "./carrito/carritoSlice";


const reducers = combineReducers({
    categorias: categoriasReducer,
    productos: productosReducer,
    recomendados: recomendadosReducer,
    carrito: carritoReducer, 

})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['carrito']

}

const persistedReducer = persistReducer(persistConfig, reducers);


export const store = configureStore({
    reducer: persistedReducer
});

export const persistor = persistStore(store);





