import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setUserAut } from "../../Redux/users/usersSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Importa Axios;

const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #6687a9;
  color: white;
  margin-top: 60px;
`;

const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const RegisterInput = styled.input`
  padding: 10px;
  margin: 10px;
  width: 80%;
  border-radius: 5px;
  border: none;
  background-color: white;
  font-size: 1rem;
`;

const RegisterLabel = styled.label`
  margin: 10px;
  font-size: 1rem;
`;

const RegisterButton = styled.button`
  padding: 10px;
  margin: 10px;
  width: 80%;
  border-radius: 5px;
  border: none;
  background-color: white;
  font-size: 1.2rem;
  cursor: pointer;
`;

const Register = () => {
  const dispatch = useDispatch();
  
 const navigate = useNavigate()

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email || !formData.password) {
      alert("Debes rellenar todos los campos");
    } else {
      try {
        const response = await axios.post("https://mydatabbase01.vercel.app/users", formData); // Realiza la solicitud POST al endpoint /api/register en tu servidor
        const user = response.data; // Los datos del usuario recién creado
        dispatch(setUserAut(user));
        console.log("Los datos subidos al servidor:",user)
        navigate("/");
        // Lógica adicional de redirección o acciones
      } catch (error) {
        console.error("Error al registrar el usuario:", error);
      }
    }
  };
  return (
    <RegisterContainer>
      <RegisterForm onSubmit={handleSubmit}>
        <h2 style={{ fontSize: "2rem", marginBottom: "30px" }}>Registro de Usuario</h2>
        <RegisterLabel htmlFor="name" style={{ fontSize: "1.2rem" }}>
          Nombre:
        </RegisterLabel>
        <RegisterInput
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          placeholder="Ingresa tu nombre"
          onChange={handleChange}
        />

        <RegisterLabel htmlFor="email" style={{ fontSize: "1.2rem" }}>
          Email:
        </RegisterLabel>
        <RegisterInput
          type="email"
          id="email"
          name="email"
          value={formData.email}
          placeholder="Ingresa tu dirección de email"
          onChange={handleChange}
        />

        <RegisterLabel htmlFor="password" style={{ fontSize: "1.2rem" }}>
          Contraseña:
        </RegisterLabel>
        <RegisterInput
          type="password"
          id="password"
          name="password"
          value={formData.password}
          placeholder="Ingresa tu contraseña"
          onChange={handleChange}
        />

        <RegisterButton type="submit">Registrarse</RegisterButton>
      </RegisterForm>
    </RegisterContainer>
  );
};

export default Register;
