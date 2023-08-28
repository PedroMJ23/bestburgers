import React from "react";
import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/LogIn/Login";
import Categorias from "../Components/Categorias/Categorias";
import Menu from "../Components/Manu/Menu";
import CarritoDeCompras from "../Components/CarroDeCompras/carritoDeCompras";
import NotFound from "../Pages/Not Found/NotFound";
import Register from "../Pages/Register/Register";
import OrdenRealizada from "../Pages/Ordenes/OrdenesGeneradas";


const GlobalRoutes = () => {
  return (
    <ReactDomRoutes>
      <Route index path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="categorias" element={<Categorias />} />
      <Route path="menu" element={<Menu />} />
      <Route path="carrito" element={<CarritoDeCompras />} />
      <Route path="ordenes" element={<OrdenRealizada/>}/>
      <Route path="*" element={<NotFound />} />
    </ReactDomRoutes>
  );
};

export default GlobalRoutes;
