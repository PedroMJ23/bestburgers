import React, { useEffect, useState } from "react";
import {  useSelector } from "react-redux";
import styled from "styled-components";
import axios from "axios";
//import { eliminarOrden } from "../../Redux/ordenes/ordenesSlice";
import { useNavigate } from "react-router-dom";

const OrdenRealizadaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
  min-height: 100vh;
`;

const OrdenRealizadaItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid white;
  border-radius: 10px;
  padding: 20px;
  background-color: #2b547e;
  margin-bottom: 20px;
`;

const ActionButton = styled.button`
  padding: 5px 10px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const DeleteButton = styled(ActionButton)`
  background-color: #ff6347;
  color: white;
`;

const PayButton = styled(ActionButton)`
  background-color: #4caf50;
  color: white;
`;

const BackToHomeButton = styled(ActionButton)`
  background-color: #007bff;
  color: white;
`;

const OrdenRealizada = () => {
  const usuarioAut = useSelector((state) => state.user.userAut);
  const [ordenesEnStore, setOrdenesEnStore] = useState([]);
  
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrdenes = async () => {
      try {
        if (usuarioAut) {
          const response = await axios.get(
            `https://mydb01.vercel.app/ordenes/${usuarioAut.email}`
          );

          if (response.status === 200) {
            setOrdenesEnStore(response.data.ordenes);
          } else {
            console.log("Hubo un problema al obtener las órdenes");
          }
        }
      } catch (error) {
        console.error("Error al hacer la solicitud:", error);
      }
    };

    fetchOrdenes();
  }, [usuarioAut]);

  const handleEliminarOrden = async (ordenId) => {
    try {
      const response = await axios.delete(
        `https://mydb01.vercel.app/ordenes/${ordenId}`
      );

      if (response.status === 200) {
        // Elimina la orden del estado local
        setOrdenesEnStore((prevOrdenes) =>
          prevOrdenes.filter((orden) => orden._id !== ordenId)
        );
        console.log("Orden eliminada exitosamente");
      } else {
        console.log("Hubo un problema al eliminar la orden");
      }
    } catch (error) {
      console.error("Error al hacer la solicitud:", error);
    }
  };

  const handlePagarOrden = (ordenId) => {
    // Agregar la lógica para efectuar el pago de la orden
    //console.log(`Pagar orden con ID: ${ordenId}`);
    alert("Gracias por tu compra!");
  };

  return (
    <OrdenRealizadaContainer>
      <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>
        Órdenes Generadas
      </h2>
      {ordenesEnStore.length === 0 ? (
        <OrdenRealizadaItem>
          <p>No hay órdenes generadas</p>
          <BackToHomeButton onClick={() => navigate("/")}>
            Volver al inicio
          </BackToHomeButton>
        </OrdenRealizadaItem>
      ) : (
        ordenesEnStore.map((orden) => (
          <OrdenRealizadaItem key={orden.id}>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
              Orden ID: {orden._id}
            </h3>
            <p style={{ fontSize: "1.2rem" }}>Usuario: {orden.usuario}</p>
            <p style={{ fontSize: "1.2rem" }}>Total: ${orden.total}</p>
            <h4 style={{ fontSize: "1.3rem", marginTop: "15px" }}>Productos:</h4>
            <ul style={{ fontSize: "1.2rem", textAlign: "left" }}>
              {orden.items.map((item) => (
                <li key={item.id}>
                  {item.nombre} - Cantidad: {item.cantidad}
                </li>
              ))}
            </ul>
            <DeleteButton onClick={() => handleEliminarOrden(orden._id)}>
              Eliminar orden
            </DeleteButton>
            <PayButton onClick={() => handlePagarOrden(orden._id)}>
              Pagar
            </PayButton>
          </OrdenRealizadaItem>
        ))
      )}
    </OrdenRealizadaContainer>
  );
};

export default OrdenRealizada;
