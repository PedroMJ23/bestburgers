import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { verElCarrito } from "../../Redux/carrito/carritoSlice";
import CarritoDeCompras from "../../Components/CarroDeCompras/carritoDeCompras";

const slide = keyframes`
  0% {
    transform: scaleX(0);
    transform-origin: left;
  }
  50% {
    transform: scaleX(1.2);
    transform-origin: left;
  }
  100% {
    transform: scaleX(1);
    transform-origin: right;
  }
`;

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #333;
  color: white;
  padding: 10px;
  width: 100%;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 10px;
  border-radius: 8px;
`;
const IconLogIn = styled.img`
  width: 20px;
  height: 20px;
  margin: 2px;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
`;

const MenuItem = styled(Link)`
  display: flex;
  margin-right: 20px;
  position: relative;
  cursor: pointer;
  color: white;
  align-items: center;
  justify-content: center;

  &:hover::after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: white;
    animation: ${slide} 0.3s ease-in-out;
  }
  @media only screen and (max-width: 767px) {
    display: flex;
  }
`;
const CartImg = styled.img`
  height: 25px;
  width: 25px;
  margin: 2px;
`;

const BubbleSpan = styled.span`
  background-color: grey;
  border-radius: 50px;
  border: 1px solid beige;
  padding: 5px;
  height: 18px;
  width: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 5px;
  right: 15px;
`;

const Navbar = () => {
  const dispatch = useDispatch();

  const { hidden } = useSelector((state) => state.carrito);
  const cantidadItemsEnELcarrito = useSelector(
    (state) => state.carrito.itemsDelCarrito
  ).reduce((acc, item) => (acc += item.cantidad), 0);

  return (
    <NavbarContainer>
      <Logo>
        <Icon src={require("../../Assets/Images/Hamburguesas.jpg")} alt=" Logo" />
      </Logo>

      <Menu>
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/menu">Menu</MenuItem>
        <MenuItem to="login">
          Login
          <IconLogIn src={require("../../Assets/Images/acceso.png")} alt="" />
        </MenuItem>

        <MenuItem onClick={() => dispatch(verElCarrito())}>
          <CartImg
            src={require("../../Assets/Images/carrito-de-compras.png")}
            alt="Cart"
          />
          <BubbleSpan>{cantidadItemsEnELcarrito}</BubbleSpan>
          {!hidden && <CarritoDeCompras />}
        </MenuItem>
      </Menu>
    </NavbarContainer>
  );
};

export default Navbar;
