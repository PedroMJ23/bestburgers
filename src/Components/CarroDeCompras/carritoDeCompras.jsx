import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { css, styled } from "styled-components";
import CarritoItem from "./carritoItem";
import {
  vaciarElCarrito,
  verElCarrito,
} from "../../Redux/carrito/carritoSlice";

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

  ${({ isHidden }) =>
    !isHidden &&
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

const BtnFinaizar = styled.button`
  padding: 5px 10px;
  border: 1px solid #333;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(0.9);
  }
`;

const CarritoDeCompras = () => {
  const arraydecarrito = useSelector((state) => state.carrito.itemsDelCarrito);
  const dispatch = useDispatch();
  const { itemsDelCarrito, costoDeEnvio, hidden } = useSelector(
    (state) => state.carrito
  );

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

  const finalizarLaCompra = () => {
    const confirmarCompra = window.confirm("¿Desea finalizar la compra?");
    if (confirmarCompra) {
      dispatch(vaciarElCarrito());
      alert("Gracias por tu compra!");
    }
    dispatch(verElCarrito());
  };

  const usuarioAut = useSelector((state) => state.user.userAut);

  return (
    <>
      {!hidden && (
        <ModalOverlayStyled onClick={handleOverlayClick} isHidden={hidden} />
      )}
      {!hidden && (
        <CarritoDiv onClick={() => dispatch(verElCarrito())}>
          <h3>
            {usuarioAut && usuarioAut.username ? (
              <>Tus compras {usuarioAut.username}:</>
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
          <BtnFinaizar disabled={carritoVacio} onClick={finalizarLaCompra}>
            Finalizar compra
          </BtnFinaizar>
        </CarritoDiv>
      )}
    </>
  );
};

export default CarritoDeCompras;
