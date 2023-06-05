import React from "react";
import { useDispatch  } from "react-redux";
import { styled } from "styled-components";
import { seleccCategorias } from "../../Redux/categorias/categoriasSlice";

const CardCategoria = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 150px;
  height: 110px;
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
const ImgYSpan = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  //border: 3px solid red;
`;


const Categoria = ({ id, nombre, categoria, desc, img }) => {


  const dispatch = useDispatch();
 
 
  return (
    <CardCategoria onClick={()=>{ dispatch(seleccCategorias(categoria)) }}>
      <div>
        <h3>{nombre}</h3>
      </div>
      <ImgYSpan>
        <ImgCat src={img} alt="imgCat" />
        
      </ImgYSpan>
    </CardCategoria>
  );
};

export default Categoria;
