import React, { useRef } from "react";
import { HomeDiv, ImgHome, PortadaHome, TextHome } from "./HomeCss";
import Categorias from "../../Components/Categorias/Categorias";
import Menu from "../../Components/Manu/Menu";
import Recomendados from "../../Components/Recomendados/Recomendados";
import CategoriasBusqueda from "../../Components/CategoriasBusqueda/CategoriasBusqueda";
import { useSelector } from "react-redux";

const Home = () => {
  const productRef = useRef();

  const doScroll = () => {
    window.scrollTo(
      productRef.current.getBoundingClientRect().x,
      productRef.current.getBoundingClientRect().y
    );
  };

  const usuarioAut = useSelector((state) => state.user.userAut);

  return (
    <HomeDiv>
      <h1>
        {usuarioAut && usuarioAut.nombre ? (
          <>¡Estamos encantados de tenerte {usuarioAut.nombre} en Best Burgers LP!</>
        ) : (
          <>¡Bienvenido a Best Burgers LP!</>
        )}
      </h1>
      <PortadaHome>
        <ImgHome
          src={require("../../Assets/Images/hamburguesas-a-domicilio-980x653.jpg")}
          alt="imagen_home"
          className="img_home"
        />
        <TextHome>
          <h3>Tenemos la hamburguesa que buscas!</h3>
          <p>
            Disfruta de nuestras deliciosas hamburguesas: simples, dobles, para
            niños y veggies. En nuestro menú encontrarás una amplia variedad de
            opciones que se adaptan a todos los gustos. Nuestras hamburguesas
            están hechas con ingredientes frescos y de alta calidad para
            garantizar el mejor sabor y satisfacción. Ya sea que prefieras una
            hamburguesa clásica y sencilla o una opción más elaborada, estamos
            seguros de que encontrarás la hamburguesa perfecta para ti. ¡Ven y
            prueba nuestras creaciones únicas y deliciosas! ¡Te esperamos!
          </p>
        </TextHome>
      </PortadaHome>

      <CategoriasBusqueda doScroll={doScroll} />

      <Recomendados />

      <Categorias />

      <div ref={productRef}>
        <Menu />
      </div>
    </HomeDiv>
  );
};

export default Home;
