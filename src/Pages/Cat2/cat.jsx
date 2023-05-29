import React from 'react';
import { styled } from 'styled-components';

const catDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    width: 250px;
    background-color: red;
    border-radius: 8px;

`

export const Cat = ({id,categoria}) => {
  return (
    <catDiv>{categoria}</catDiv>
  )
}
