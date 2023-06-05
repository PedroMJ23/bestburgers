import React from "react";
import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/LogIn/Login";
import Categorias from "../Components/Categorias/Categorias";
import Menu from "../Components/Manu/Menu";
import CarritoDeCompras from "../Components/CarroDeCompras/carritoDeCompras";
import NotFound from "../Pages/Not Found/NotFound";

const GlobalRoutes = () => {
  return (
    <ReactDomRoutes>
      <Route index path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="categorias" element={<Categorias />} />
      <Route path="menu" element={<Menu />} />
      <Route path="carrito" element={<CarritoDeCompras />} />
      <Route path="*" element={<NotFound />} />
    </ReactDomRoutes>
  );
};

export default GlobalRoutes;
