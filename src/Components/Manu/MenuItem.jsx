import React from "react";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { añadirAlCarrito } from "../../Redux/carrito/carritoSlice";

const CardMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 300px;
  height: 250px;
  border-radius: 8px;
  //background-color:#8E44AD ;
  border: 1px solid black;
  gap: 10px;
  margin: 10px;
  text-align: center;
  @media only screen and (max-width: 767px) {
    height: 200px;
    width: 280px;
  }
`;
const ImgCat = styled.img`
  width: 250px;
  height: 150px;
  border-radius: 8px;
  background-color: blue;
  @media only screen and (max-width: 767px) {
    height: 100px;
    width: 180px;
  }
`;

const SpanBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const MenuItem = ({ id, nombre, precio, categoria, desc, img }) => {
  const dispatch = useDispatch();

  return (
    <CardMenu>
      <div>
        <h3>{nombre}</h3>
      </div>
      <div>
        <ImgCat src={img} alt="imgCat" />
        {/* <p>{desc}</p> */}
        <SpanBtn>
          <span>ARS {precio}</span>
          <button
            onClick={() =>
              dispatch(
                añadirAlCarrito({ id, nombre, precio, categoria, desc, img })
              )
            }
          >
            Agregar
          </button>
        </SpanBtn>
      </div>
    </CardMenu>
  );
};

export default MenuItem;
