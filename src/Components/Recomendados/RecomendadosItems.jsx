import React from 'react';
import { styled } from 'styled-components';


const CardMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 350px;
    height: 300px;
    border-radius: 8px;
    //background-color:#8E44AD ;
    border: 1px solid black;
    gap: 10px;
    margin: 10px;
    @media only screen and (max-width: 767px) {
        height: 200px;
        width: 280px;
    }
    
`
const ImgCat = styled.img`
    width: 250px;
    height: 150px;
    border-radius: 8px;
    background-color: blue;
    @media only screen and (max-width: 767px) {
        height: 100px;
        width: 180px;
    }

`
const SpanBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`

const RecomendadosItems = ({id, nombre, precio, img}) => {
  return (
    <CardMenu>
      <div>
            <h3>{nombre}</h3>
        </div>
        <div>
            <ImgCat src={img} alt="imgRec" />
           
            <SpanBtn>
                <span>ARS {precio}</span>
                <button>Agregar</button>
            </SpanBtn>
        </div>

    </CardMenu>
  )
}

export default RecomendadosItems