import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const RegistroContainer = styled.div`
   background-color: #6687A9;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const RegistroForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: 480px;
  margin: 15px auto auto auto;
  border: 1px solid white;
  border-radius: 10px;
  gap: 5px;
  //background-color: #f5f5f5;
  background-color: #2b547e;
  color: white;
`;
const RegisterLabel = styled.label`
  margin: 10px;
  font-size: 1rem;
`;

const RegistroInput = styled.input`
  padding: 10px;
  margin: 5px;
  width: 80%;
  border-radius: 5px;
  border: none;
  background-color: white;
  font-size: 1rem;
`;

const RegistroButton = styled.button`
  padding: 8px;
  margin-top: 16px;
  border-radius: 8px;
  border: none;
  outline: none;
  background-color: white;
  color: black;
  cursor: pointer;
  font-size: 1.2rem;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  border-bottom: 1px solid white;
`;

const Register = () => {
  return (
    <RegistroContainer>
      <RegistroForm>
        <h2>Registro</h2>
        <RegisterLabel htmlFor="email" style={{ fontSize: "1.2rem" }}>
          Ingrese su emal:
        </RegisterLabel>
        <RegistroInput type="email" placeholder="Email" />
        <RegisterLabel htmlFor="email" style={{ fontSize: "1.2rem" }}>
          Ingrese su contraseña:
        </RegisterLabel>
        <RegistroInput type="password" placeholder="Contraseña" />
        <RegistroInput type="password" placeholder="Confirmar Contraseña" />
        <RegistroButton>Registrarse</RegistroButton>
        <div style={{ fontSize: "1.2rem" }}>
          ¿Ya tienes cuenta? <StyledLink to="/login">Iniciar sesión</StyledLink>
        </div>
      </RegistroForm>
    </RegistroContainer>
  );
};

export default Register;