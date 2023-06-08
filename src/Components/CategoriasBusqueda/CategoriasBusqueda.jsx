import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { seleccCategorias } from "../../Redux/categorias/categoriasSlice";
import { styled } from "styled-components";

const CategoriasBusquedaDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  width: auto;
  margin: 15px auto;
  font-size: 20px;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: stretch;
    gap: 5px;
  }
`;

const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

const Button = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  &:hover {
    transform: scale(0.9);
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

const CategoriasBusqueda = ({ doScroll }) => {
  const [value, setValue] = useState("");

  const listaDeCat = useSelector((state) =>
    state.categorias.categorias.map((categoria) => categoria.categoria)
  );

  const dispatch = useDispatch();

  const handleSubmit = (e, value) => {
    e.preventDefault();

    const nuevaCat = value.trim().toLowerCase().replace(" ", "");

    const categoriaSelecc = listaDeCat.find(
      (categoria) => categoria.toLowerCase() === nuevaCat
    );

    if (categoriaSelecc) {
      dispatch(seleccCategorias(categoriaSelecc));
      doScroll();
      setValue("");
    } else {
      alert("Categoria no encontrada");
      setValue("");
    }
  };

  return (
    <CategoriasBusquedaDiv>
      <div>
        <p>¿Qué categorias estás buscando?</p>
      </div>
      <Form>
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
        />
        <Button onClick={(e) => handleSubmit(e, value)}>Buscar</Button>
      </Form>
    </CategoriasBusquedaDiv>
  );
};

export default CategoriasBusqueda;
