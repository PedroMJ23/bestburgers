import React from "react";
import Categoria from "./Categoria";
//import products from "../../Data/Products";
import { styled } from "styled-components";
import { useSelector } from "react-redux";
//import CategoriasTodas from "../../Data/Categorias";


const CategoriasDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 20px 40px;

  :hover {
    background-color: #8e44ad;
    cursor: pointer;
  }
 
  @media only screen and (max-width: 767px) {
    width: 400px;
    max-width: 95%;
    margin: 20px auto;
  }
`;

const Categorias = () => {

const categorias = useSelector(state => state.categorias.categorias);

  return (
    <>
      <h2>Categorias</h2>
      <CategoriasDiv>
        {categorias.map((item) => (
          <Categoria key={item.id} {...item} />
        ))}
      </CategoriasDiv>
    </>
  );
};

export default Categorias;
