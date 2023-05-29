import React from "react";
import { styled } from "styled-components";


const CardCategoria = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 130px;
  height: 160px;
  border-radius: 8px;
  //background-color:#8E44AD ;
  border: 1px solid black;
  gap: 10px;
  margin: 10px;
  @media only screen and (max-width: 767px) {
    height: 200px;
    width: 280px;
  }
`;
const ImgCat = styled.img`
  width: 50px;
  height: 40px;
  border-radius: 8px;
  margin: 5px;

  @media only screen and (max-width: 767px) {
    width: 50px;
    height: 40px;
  }
`;
const imgYSpan = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
border: 3px solid red;

`;


const SpanBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    height: 20px;
    width: 50px;
    border-radius: 5px;
    border: 1px transparent;
    background-color: #ea5a1d;
  }
`;
const btnCat = styled.button`
  height: 20px;
  width: 50px;
  border-radius: 5px;
  border: 1px transparent;
  background-color: #ea5a1d;

`;

const Categoria = ({ id, nombre, categoria, desc, img }) => {
  return (
    <CardCategoria>
      <div>
        <h3>{nombre}</h3>
      </div>
      <imgYSpan>
        <ImgCat src={img} alt="imgCat" />
        <SpanBtn>
          <button>Ver</button>
        </SpanBtn>
      </imgYSpan>
    </CardCategoria>
  );
};

export default Categoria;
