import React from 'react';
import { styled } from 'styled-components';
import products from '../../Data/Products';


const CatDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  

`

const Cat2 = () => {

    const categories = new Set(products.map(item => item.categoria));

  return (
    <CatDiv>
        <h1>SOy cat2</h1>
        <>
    {Array.from(categories).map(category => (
      <h2 key={category}>{category}</h2>
    ))}
  </>
    
    </CatDiv>
    
  )
}

export default Cat2