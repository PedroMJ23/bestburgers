import React from "react";
import { styled } from "styled-components";

const CardMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 300px;
  height: 210px;
  border-radius: 8px;
  //background-color:#8E44AD ;
  border: 1px solid black;
  gap: 10px;
  margin: 10px auto;

  @media only screen and (max-width: 767px) {
    height: 170px;
    width: 230px;
  }
`;
const ImgCat = styled.img`
  width: 250px;
  height: auto;
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
  justify-content: space-between;
 
`;

const RecomendadosItems = ({ id, nombre, precio, img }) => {
  return (
    <CardMenu>
      <div>
        <h3>{nombre}</h3>
      </div>
      <div>
        <ImgCat src={img} alt="imgRec" />

        <SpanBtn>
          <span>ARS {precio}</span>
          <button>Agregar</button>
        </SpanBtn>
      </div>
    </CardMenu>
  );
};

export default RecomendadosItems;
