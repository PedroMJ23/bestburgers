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
`

const CategoriasBusqueda = ( { doScroll } ) => {
  const [value, setValue] = useState('');

  const listaDeCat = useSelector((state) => state.categorias.categorias).map(
    (categoria) => categoria.categoria
  );
  //console.log(listaDeCat)

  const dispatch = useDispatch();

  const handlesubmit = (e, value) => {
    e.preventDefault();

    const nuevaCat = value.trim().toLowerCase().replace(" ", "");

    const categoriaSelecc = listaDeCat.find(
      categoria => categoria.toLowerCase() === nuevaCat
    );
    if (categoriaSelecc) {
      dispatch(seleccCategorias(categoriaSelecc));
      console.log('cat find:', categoriaSelecc)
      doScroll()
    } else {
      return "Categoria no encontrada";
    }
  };

  return (
    <>
    <CategoriasBusquedaDiv>
      <div>
        <p>¿Qué categorias estás buscando?</p>
      </div>
      <form action="">
        <input
          value={value}
          onChange={e => setValue(e.target.value)}
          type="text"
        />
        <button onClick={(e) => handlesubmit(e, value)}>Buscar</button>
      </form>
      </CategoriasBusquedaDiv>
    </>
  );
};

export default CategoriasBusqueda;
