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

const Btns = styled.button`
  padding: 5px 10px;
  border: 1px solid #333;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(0.9);
  }
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
        <SpanBtn>
          <span>ARS {precio}</span>
          <Btns
            onClick={() =>
              dispatch(
                añadirAlCarrito({ id, nombre, precio, categoria, desc, img })
              )
            }
          >
            Agregar
          </Btns>
        </SpanBtn>
      </div>
    </CardMenu>
  );
};

export default MenuItem;
