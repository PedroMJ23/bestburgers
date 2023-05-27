import React from "react";
import { HomeDiv, ImgHome, PortadaHome, TextHome } from "./HomeCss";
import Categorias from "../Categorias/Categorias";
import Menu from "../Manu/Menu";

const Home = () => {
  return (
    <HomeDiv>
      <h1>Bienvenidos a Best Burguers LP! </h1>
      <PortadaHome>
        <ImgHome
          src={require("../../Assets/Images/hamburguesas-a-domicilio-980x653.jpg")}
          alt="imagen_home"
          className="img_home"
        />
        <TextHome>
          <h3>Tenemos la hamburguesa que buscas!</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            praesentium temporibus, minima error impedit unde blanditiis
            voluptatibus quis maiores odio placeat repellat provident? Tempore,
            doloribus! Nobis beatae eaque inventore neque! Cupiditate iste nobis
            provident quae vel officiis eligendi nihil eos ut facilis
            praesentium, libero, eveniet voluptas ullam earum quidem quia quis
            deleniti, totam dolorum non quos saepe. Odit, asperiores quas! A
            aliquid tempora esse nostrum dolores fuga illo officiis pariatur
            provident, cum accusamus id ea cumque autem perspiciatis nobis animi
            odio eum itaque neque exercitationem vel recusandae quaerat! Dicta,
            consequuntur. Fuga dolor minus sit ea voluptas? Sint qui quam
            blanditiis dicta dolor, eos quos libero rem? Iusto eum culpa non
            quae ab in? Pariatur esse saepe explicabo maxime, animi nihil! Ea
            tempore maxime ad ex voluptates harum quia sunt, aspernatur a? Unde,
            porro. Sunt ut molestias harum laboriosam error eius culpa non
            facilis, modi, cum et magnam tempora rerum molestiae.
          </p>
        </TextHome>
      </PortadaHome>
      <Categorias />
      <Menu />
    </HomeDiv>
  );
};

export default Home;