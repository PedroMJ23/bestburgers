import React from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import CarritoItem from "./carritoItem";



const CarritoDiv = styled.div`
 display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #6687a9;
  color: white;
  flex-wrap: wrap;


`

const CarritoDeCompras = () => {
  const arraydecarrito = useSelector((state) => state.carrito.itemsDelCarrito);
  console.log(arraydecarrito);

  return (
    <>
      <CarritoDiv> {
        arraydecarrito.map( item => <CarritoItem key={item.id} {...item}/> )

        } </CarritoDiv>
    </>
  );
};

export default CarritoDeCompras;
