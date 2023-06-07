import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setUserAut } from "../../Redux/users/usersSlice";
import { useNavigate } from "react-router-dom";

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #6687a9;
  color: white;
  margin-top: 60px;
  //z-index: -1;
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


const LoginFormContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userAut = useSelector((state) => state.user.userAut);

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
if(!formData.username || !formData.password){
  alert('Debes rellenar todos los campos')
}else{
  dispatch(setUserAut(formData));
}
   
  };

  useEffect(() => {
    window.scrollTo(0, 0);
       if (userAut) {
      navigate("/");
    }
  }, [navigate, userAut]);

  return (
    <LoginForm onSubmit={handleSubmit}>
      <h2 style={{ fontSize: "2rem", marginBottom: "30px" }}>Iniciar Sesión</h2>
      <LoginLabel htmlFor="username" style={{ fontSize: "1.2rem" }}>
        Usuario:
      </LoginLabel>
      <LoginInput
        type="text"
        id="username"
        name="username"
        value={formData.username}
        placeholder="Ingresa tu nombre de usuario"
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

<LoginButton type="submit" >Login/Registro</LoginButton>


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