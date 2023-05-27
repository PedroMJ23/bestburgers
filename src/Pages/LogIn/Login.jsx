//import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Register from "../Register/Register";
//import PageContext from "../Context/Context";
//import { useNavigate } from 'react-router-dom';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #6687a9;
  color: white;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: 480px;
  border: 1px solid white;
  border-radius: 10px;
  margin: 15px auto auto auto;
  position: relative;
  box-shadow: 0 0 0 0 rgba(255, 255, 255, 1);
  animation: pulse 2s infinite;
  background-color: #2b547e;
`;

const LoginInput = styled.input`
  padding: 10px;
  margin: 10px;
  width: 80%;
  border-radius: 5px;
  border: none;
  background-color: white;
  font-size: 1rem;
`;

const LoginLabel = styled.label`
  margin: 10px;
  font-size: 1rem;
`;

const LoginButton = styled.button`
  padding: 10px;
  margin: 10px;
  width: 80%;
  border-radius: 5px;
  border: none;
  background-color: white;
  font-size: 1.2rem;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  border-bottom: 1px solid white;
`;

const LoginFormContainer = () => {
  //const { aut, form, handleChange, handleSubmit } = useContext(PageContext);

  //const navigate = useNavigate();

 /* useEffect(() => {
    if (aut) {
      navigate("/");
    }
  }, [navigate, aut]);*/

  return (
    <LoginForm>
      <h2 style={{ fontSize: "2rem", marginBottom: "30px" }}>Iniciar Sesión</h2>
      <LoginLabel htmlFor="text" style={{ fontSize: "1.2rem" }}>
        Usuario:
      </LoginLabel>
      <LoginInput
        type="text"
        id="username"
        name="username"
        //value={form.username}
        placeholder="Ingresa tu nombre de usuario"
        //onChange={(e) => handleChange(e)}
      />

      <LoginLabel htmlFor="password" style={{ fontSize: "1.2rem" }}>
        Password:
      </LoginLabel>
      <LoginInput
        type="password"
        id="password"
        name="password"
        //value={form.password}
        placeholder="Ingresa tu contraseña"
        //onChange={(e) => handleChange(e)}
      />

      <LoginButton type="submit" 
      //onClick={(e) => handleSubmit(e)}
      
      >
        Login
      </LoginButton>

      <div style={{ fontSize: "1.2rem" }}>
        ¿No tienes cuenta?
        <StyledLink to="/registro" element={<Register/>}>
          Regístrate
        </StyledLink>
      </div>
    </LoginForm>
  );
};

const Login = () => {
  return (
    <LoginContainer>
      <LoginFormContainer />
    </LoginContainer>
  );
};

export default Login;
