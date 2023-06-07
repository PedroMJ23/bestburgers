import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { verElCarrito } from "../../Redux/carrito/carritoSlice";
import CarritoDeCompras from "../../Components/CarroDeCompras/carritoDeCompras";
import { setUserAut } from "../../Redux/users/usersSlice";
import { seleccCategorias } from "../../Redux/categorias/categoriasSlice";

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
  position: fixed;
  z-index: 500;
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
const MenuItemLogo = styled(Link)`
  display: flex;
  margin-right: 20px;
  position: relative;
  cursor: pointer;
  color: white;
  align-items: center;
  justify-content: center;
 `  
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

  const { userAut } = useSelector((state) => state.user);
  //console.log({hidden})
  const hiddenState = useSelector((state) => state.carrito.hidden);
  const hiddenOnClick = () => {
    window.scrollTo(0, 0);
    if (hiddenState === true) {
      return;
    } else {
      dispatch(verElCarrito());
    }
  };
  const hiddenOnClickMenu = () => {
    window.scrollTo(0, 0);
    if (hiddenState === true) {
      dispatch(seleccCategorias());
    } else {
      dispatch(verElCarrito());
      dispatch(seleccCategorias());
    }
  };
  const hiddenOnClickLog = () => {
    if (hiddenState === true) {
      dispatch(setUserAut(null));
    } else {
      dispatch(verElCarrito());
      dispatch(setUserAut(null));
    }
  };

  //const handleLogout = () => {  dispatch(setUserAut(null));  };
  

  
  return (
    <NavbarContainer>
      <MenuItemLogo to="/" onClick={hiddenOnClick} >
        <Icon
          src={require("../../Assets/Images/Hamburguesas.jpg")}
          alt="Logo"
        />
      </MenuItemLogo>

      <Menu>
        <MenuItem to="/" onClick={hiddenOnClick}>
          Home
        </MenuItem>
        <MenuItem to="/menu" onClick={hiddenOnClickMenu}>
          Menu
        </MenuItem>
        {userAut ? (
          <MenuItem to="/" onClick={hiddenOnClickLog}>
            Cerrar Sesión
            <IconLogIn src={require("../../Assets/Images/acceso.png")} alt="" />
          </MenuItem>
        ) : (
          <MenuItem to="/login" onClick={hiddenOnClick}>
            Login
            <IconLogIn src={require("../../Assets/Images/acceso.png")} alt="" />
          </MenuItem>
        )}

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
