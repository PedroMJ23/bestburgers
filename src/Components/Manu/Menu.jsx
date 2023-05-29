import React from 'react'
import { styled } from 'styled-components'
//import products from '../../Data/Products'
import MenuItem from './MenuItem'
import { useSelector } from 'react-redux'

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

  const productos = useSelector( state => state.productos.productos)

  return (<>
  <h2>Nuestro Menú</h2>
  
  <MenuDiv>{productos.map((item)=> <MenuItem key={item.id} {...item} />  )}</MenuDiv>
  <button>Ver Más</button>
  </>
   
  )
}

export default Menu