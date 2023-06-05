import React from "react";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { añadirAlCarrito, eliminarDelCarrito } from "../../Redux/carrito/carritoSlice";

const CarritoItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
  min-width: 250px;
  height: 70px;
  border: 1px solid white;
  border-radius: 10px;
  margin: 15px 15px;
  position: relative;
  box-shadow: 0 0 0 0 rgba(255, 255, 255, 1);
  animation: pulse 2s infinite;
  background-color: #2b547e;
`;

const CarritoImg = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 8px;
`;
const ImgSpanP = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const DivSpanYBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  text-align: center;
  button{
    height: 35px;
    width: 35px;
    border-radius: 8px;
  }
`;

const CarritoItem = ({ id, nombre, precio, categoria, desc, img, cantidad }) => {
  
  const dispatch = useDispatch();

  const quitarItems = () => {
    if (cantidad === 1) {
      const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este elemento del carrito?");
      if (confirmDelete) {
        dispatch(eliminarDelCarrito(id));
      }
    } else {
      dispatch(eliminarDelCarrito(id));
    }
  };


  
 

  return (
    <>
    <CarritoItemDiv>
      <ImgSpanP>
        <CarritoImg src={img} alt="imgCat" />
        <p>{nombre}</p>
        <span>ARS ${precio}</span>
        <DivSpanYBtn>
          <button onClick={quitarItems} >-</button>
          <span>{cantidad}</span> 
         
          <button onClick={()=>dispatch(añadirAlCarrito( {id, nombre, precio, categoria, desc, img, cantidad} ))} >+</button>
        </DivSpanYBtn>  
      </ImgSpanP>
    </CarritoItemDiv>
    
    </>
    
  );
};

export default CarritoItem;
