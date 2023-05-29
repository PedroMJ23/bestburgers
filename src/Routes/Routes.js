import React from 'react';
import {Routes as ReactDomRoutes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Login from '../Pages/LogIn/Login';
import Register from '../Pages/Register/Register';
import Categorias from '../Components/Categorias/Categorias';
import Menu from '../Components/Manu/Menu';
import NotFound from '../Pages/Not Found/NotFound';
//import Cat2 from '../Pages/Cat2/Cat2';


const GlobalRoutes = () => {
  return (
    <ReactDomRoutes>
        <Route index path='/' element={<Home/>} />
        <Route  path='login' element={<Login/>} />
        <Route  path='registro' element={<Register/>} />
        <Route  path='categorias' element={<Categorias/>} />
       {/* <Route  path='cat2' element={<Cat2/>} />*/}
        <Route  path='menu' element={<Menu/>} />
        <Route  path='*' element={<NotFound/>} />


    </ReactDomRoutes>
  )
}

export default GlobalRoutes;