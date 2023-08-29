import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { css, styled } from "styled-components";
import CarritoItem from "./carritoItem";
import {
  vaciarElCarrito,
  verElCarrito,
} from "../../Redux/carrito/carritoSlice";
import { agregarOrden } from "../../Redux/ordenes/ordenesSlice";
import { Link } from "react-router-dom";
import axios from "axios"; // Importa Axios

const CarritoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  //height: 100vh;
  background-color: #6687a9;
  color: white;
  //flex-wrap: wrap;
  flex-direction: column;
  width: 360px;
  background-color: #2b547e;
  position: fixed;
  top: 60px;
  right: 0;
  z-index: 99;
  min-height: 250px;
  max-height: calc(100vh - 6rem);
  gap: 10px;

  padding: 2rem;
  //background-color: var(--gray-bg);
  border-radius: 0 0 0 1rem;
  box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.3);
  cursor: auto;
  button {
    cursor: pointer;

    &:disabled {
      background-image: none;
      cursor: not-allowed;

      &:hover {
        background-image: url("../../Assets/Others/prohibido.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: 20px 20px;
      }
    }
  }
`;
const ModalOverlayStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: calc(100vw - 360px);
  height: 100vh;
  margin-top: 57px;

  ${({ ishidden }) =>
    !ishidden &&
    css`
      backdrop-filter: blur(4px);
    `}
`;

const ItemsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  overflow-y: scroll;
  width: 340px;
  height: 90%;
`;


const BtnLink = styled(Link)`
  padding: 5px 10px;
  border: 1px solid #333;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  &:disabled {
      background-image: none;
      cursor: not-allowed;

      &:hover {
        background-image: url("../../Assets/Others/prohibido.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: 20px 20px;
      }
    }
`;

const CarritoDeCompras = () => {
  const arraydecarrito = useSelector((state) => state.carrito.itemsDelCarrito);
  const dispatch = useDispatch();
  const { itemsDelCarrito, costoDeEnvio, hidden } = useSelector(
    (state) => state.carrito
  );
 
  //const ordenEnStore = useSelector((state) => state.ordenes);
  const usuarioAut = useSelector((state) => state.user.userAut);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 25) {
      dispatch(verElCarrito());
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOverlayClick = () => {
    dispatch(verElCarrito());
  };

  const precioTotal = arraydecarrito.reduce(
    (acc, item) => (acc += item.precio * item.cantidad),
    0
  );

  const carritoVacio = arraydecarrito.length === 0;
  
  const finalizarLaCompra =async () => {
    // console.log(usuarioAut)
    if (!usuarioAut) {
      alert("Debes registrarte para poder efectuar la compra!");
      dispatch(verElCarrito());
      return;
    }

    const confirmarCompra = window.confirm("¿Desea finalizar la compra?");

    if (confirmarCompra && usuarioAut) {
      const ordenGenerada = {
        usuario: usuarioAut.email,
        items: arraydecarrito,
        total: precioTotal + costoDeEnvio,
        // Puedes agregar más propiedades aquí si es necesario
      };
      try {
        const response = await axios.post(
          "https://mydb01.vercel.app/ordenes", 
          ordenGenerada
        );
        //console.log('ORDEN GENERADA DESDE EL FRONT', ordenGenerada)

        if (response.status === 200) {
          dispatch(agregarOrden(ordenGenerada));
          //alert("Has generado tu orden y se ha guardado en la API.");
        } else {
          //alert("Hubo un problema al guardar la orden en la API.");
        }
      } catch (error) {
        console.error("Error al hacer la solicitud:", error);
        alert("Hubo un error al guardar la orden en la API.");
      }

      //console.log(ordenEnStore);
      alert("has generado tu orden!");

      /*
      dispatch(vaciarElCarrito());
      
      alert("Gracias por tu compra!");
      */
    }
    dispatch(verElCarrito());
    dispatch(vaciarElCarrito());
      
  };

  return (
    <>
      {!hidden && (
        <ModalOverlayStyled onClick={handleOverlayClick} ishidden={hidden} />
      )}
      {!hidden && (
        <CarritoDiv onClick={() => dispatch(verElCarrito())}>
          <h3>
            {usuarioAut && usuarioAut.nombre ? (
              <>Tus compras {usuarioAut.nombre}:</>
            ) : (
              <>Tus compras:</>
            )}
          </h3>
          <ItemsDiv>
            {arraydecarrito.length ? (
              itemsDelCarrito.map((item) => (
                <CarritoItem key={item.id} {...item} />
              ))
            ) : (
              <p>No has comprado nada</p>
            )}
          </ItemsDiv>
          <p>Subtotal: ${precioTotal}</p>
          <p>Envio: ${costoDeEnvio}</p>
          <span>-------</span>
          <span>Total:${precioTotal + costoDeEnvio}</span>
          <BtnLink disabled={carritoVacio} to={usuarioAut ? "ordenes" : "register"}  onClick={finalizarLaCompra}>
            Finalizar compra
          </BtnLink>
          
          
        </CarritoDiv>
      )}
    </>
  );
};

export default CarritoDeCompras;
