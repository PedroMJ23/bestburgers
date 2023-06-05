import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
//import products from '../../Data/Products'
import MenuItem from "./MenuItem";
import { useSelector } from "react-redux";
import { ButtonsDiv } from "../../Components/Manu/MenuCss";

const MenuDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 98%;
  flex-wrap: wrap;

  @media only screen and (max-width: 767px) {
    max-width: 95%;
    margin: 20px auto;
  }
`;

const Menu = ({ children }) => {
  const limiteInicial = 3;
  const [limit, setLimit] = useState(limiteInicial);

  let productos = useSelector((state) => state.productos.productos);

  const categoriaSeleccionada = useSelector(
    (state) => state.categorias.categoriaSeleccionada
  );

  const totalDeProductos = useSelector(
    (state) => state.productos.totalProductos
  );

  if (categoriaSeleccionada) {
    productos = {
      [categoriaSeleccionada]: productos[categoriaSeleccionada],
    };
  }

  useEffect(() => setLimit(limiteInicial), [categoriaSeleccionada]);

  return (
    <>
      <h2>Nuestro Menú</h2>

      <MenuDiv>
        {Object.entries(productos).map(([categoria, comidas]) =>
          comidas.map((item) => {
            if (limit >= item.id || categoriaSeleccionada) {
              return <MenuItem key={item.id} {...item} />;
            } else return null;
          })
        )}
      </MenuDiv>

      {!categoriaSeleccionada && (
        <ButtonsDiv>
          <button
            onClick={() =>
              setLimit((valorPrevio) => valorPrevio - limiteInicial)
            }
            disabled={limit === limiteInicial}
          >
            Ver Menos
          </button>
          <button
            onClick={() =>
              setLimit((valorSiguente) => valorSiguente + limiteInicial)
            }
            disabled={totalDeProductos <= limit}
          >
            Ver Más
          </button>
        </ButtonsDiv>
      )}
    </>
  );
};

export default Menu;
