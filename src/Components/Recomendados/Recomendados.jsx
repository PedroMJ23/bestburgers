import React from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import RecomendadosItems from "./RecomendadosItems";

const MenuDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 98%;
  flex-wrap: wrap;

  @media only screen and (max-width: 767px) {
    width: 400px;
    max-width: 95%;
    margin: 20px auto;
  }
`;

const Recomendados = ({ children }) => {
  const productosRecomendados = useSelector(
    (state) => state.recomendados.recomendados
  );

  return (
    <>
      <h2>Te recomendamos:</h2>

      <MenuDiv>
        {productosRecomendados.map((item) => (
          <RecomendadosItems key={item.id} {...item} />
        ))}
      </MenuDiv>
    </>
  );
};

export default Recomendados;
