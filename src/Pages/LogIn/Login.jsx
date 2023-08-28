import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setUserAut } from "../../Redux/users/usersSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #6687a9;
  color: white;
  margin-top: 60px;
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

const RegisterLink = styled.span`
  color: #00aaff; /* Color que combine con la página */
  cursor: pointer;
  text-decoration: underline;
`;

const LoginFormContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userAut = useSelector((state) => state.user.userAut);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      alert("Debes rellenar todos los campos");
    } else {
      try {
        const response = await axios.post(
          "https://mydatabbase01.vercel.app/users/login",
          formData
        ); 
        const user = response.data;
        
        console.log("LA RESPUESTA DEL SERVER:", user);
        // Los datos del usuario recién creado
        const usuarioFInal = {
          nombre: user.user.nombre,
          email: user.user.email,
          password: user.user.password,
        };
        dispatch(setUserAut(usuarioFInal));
        console.log("Los datos subidos al servidor:", user);
        navigate("/");
        // Lógica adicional de redirección o acciones
      } catch (error) {
        console.error("Error al buscar el usuario:", error);
        alert("Debes registrarte!")
      }
      // dispatch(setUserAut(formData));
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (userAut) {
      navigate("/");
    }
  }, [navigate, userAut]);

  const handleRegisterClick = () => {
    navigate("/register"); // Redirecciona al formulario de registro
  };

  return (
    <LoginForm onSubmit={handleSubmit}>
      <h2 style={{ fontSize: "2rem", marginBottom: "30px" }}>Iniciar Sesión</h2>
      <LoginLabel htmlFor="email" style={{ fontSize: "1.2rem" }}>
        Email:
      </LoginLabel>
      <LoginInput
        type="text"
        id="email"
        name="email"
        value={formData.email}
        placeholder="Ingresa tu dirección de email"
        onChange={handleChange}
      />

      <LoginLabel htmlFor="password" style={{ fontSize: "1.2rem" }}>
        Password:
      </LoginLabel>
      <LoginInput
        type="password"
        id="password"
        name="password"
        value={formData.password}
        placeholder="Ingresa tu contraseña"
        onChange={handleChange}
      />

      <LoginButton type="submit">Login</LoginButton>
      <p style={{ textAlign: "center" }}>
        ¿No te registraste todavía? Hacelo desde{" "}
        <RegisterLink onClick={handleRegisterClick}>aquí</RegisterLink>
      </p>
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
