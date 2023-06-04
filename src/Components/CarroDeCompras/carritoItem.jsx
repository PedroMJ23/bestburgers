import React from "react";
import { styled } from "styled-components";

const CarritoItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
  width: 320px;
  height: 280px;
  border: 1px solid white;
  border-radius: 10px;
  margin: 15px 15px;
  position: relative;
  box-shadow: 0 0 0 0 rgba(255, 255, 255, 1);
  animation: pulse 2s infinite;
  background-color: #2b547e;
`;

const CarritoImg = styled.img`
  height: 180px;
  width: 250px;
`;
const ImgSpanP = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`

const CarritoItem = ({ id, nombre, precio, categoria, desc, img }) => {
  return (
    <CarritoItemDiv>
      <div>
        <h3>{nombre}</h3>
      </div>
      <ImgSpanP>
        <CarritoImg src={img} alt="imgCat" />
        <p>{desc}</p>
        <div>
          <span>ARS {precio}</span>
          <button>Quitar</button>
        </div>
      </ImgSpanP>
    </CarritoItemDiv>
  );
};

export default CarritoItem;
