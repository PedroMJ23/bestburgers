import React from 'react'
import { LayoutDiv } from './LayoutCss'

const Layout = ({children}) => {
  return (
    <LayoutDiv>{children}</LayoutDiv>
  )
}

export default Layout