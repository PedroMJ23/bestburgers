import React from "react";
import { StyledFooter } from "./FooterCss";
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const SocialIcon = ({ icon, link }) => {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {icon}
      </a>
    );
  };

  return (
    <StyledFooter>
      <h3>Encuéntranos en las plataformas digitales</h3>
      <div className="social">
        <SocialIcon
          icon={<FaFacebook size={38} />} // Ajusta el tamaño de los iconos
          link="https://www.facebook.com/"
        />
               <SocialIcon
          icon={<FaInstagram size={38} />} // Ajusta el tamaño de los iconos
          link="https://www.instagram.com/"
        />
        <SocialIcon
          icon={<FaWhatsapp size={38} />} // Ajusta el tamaño de los iconos
          link="https://wa.me/"
        />
      </div>
    </StyledFooter>
  );
};

export default Footer;
