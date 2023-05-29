import React, { useEffect } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const NotFoundDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: #6687a9;
  color: white;
  height: calc(100vh - 200px);
  gap: 40px;
`;

const Loader = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid #fff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const NotFound = () => {
  const navigate = useNavigate();
  //const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      //setIsLoading(false);
      navigate("/");
    }, 3000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <NotFoundDiv>
      <h1>Página no encontrada</h1>
      <Loader />

      <button onClick={() => navigate("/")}>Volver al inicio</button>
    </NotFoundDiv>
  );
};

export default NotFound;
