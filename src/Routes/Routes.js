import React from 'react';
import {Routes as ReactDomRoutes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Login from '../Pages/LogIn/Login';
import Register from '../Pages/Register/Register';
import Categorias from '../Pages/Categorias/Categorias';
import Menu from '../Pages/Manu/Menu';


const GlobalRoutes = () => {
  return (
    <ReactDomRoutes>
        <Route index path='/' element={<Home/>} />
        <Route  path='login' element={<Login/>} />
        <Route  path='registro' element={<Register/>} />
        <Route  path='categorias' element={<Categorias/>} />
        <Route  path='menu' element={<Menu/>} />




    </ReactDomRoutes>
  )
}

export default GlobalRoutes;