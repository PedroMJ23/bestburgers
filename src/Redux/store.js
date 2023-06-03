import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoriasReducer from "./categorias/categoriasSlice";

import storage from 'redux-persist/lib/storage';
import persistStore from "redux-persist/es/persistStore";
import productosReducer from "./products/productosSlice";
import { persistReducer } from "redux-persist";
import  recomendadosReducer  from "./recomendados/recomendadosSlice";


const reducers = combineReducers({
    categorias: categoriasReducer,
    productos: productosReducer,
    recomendados: recomendadosReducer
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: []

}

const persistedReducer = persistReducer(persistConfig, reducers);


export const store = configureStore({
    reducer: persistedReducer
});

export const persistor = persistStore(store);





