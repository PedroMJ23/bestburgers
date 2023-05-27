import React from 'react'
import { styled } from 'styled-components'
import products from '../../Data/Products'
import MenuItem from './MenuItem'

const MenuDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 98%;
    flex-wrap: wrap;
   
      @media only screen and (max-width: 767px) {
    width: 400px;
    max-width: 95%;
    margin: 20px auto;
   

  }
;
`

const Menu = ({children}) => {
  return (<>
  <h2>Nuetro Menú</h2>
  
  <MenuDiv>{products.map((item)=> <MenuItem key={item.id} {...item} />  )}</MenuDiv>
  <button>Ver Más</button>
  </>
   
  )
}

export default Menu