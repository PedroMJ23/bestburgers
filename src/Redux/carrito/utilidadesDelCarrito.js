export const añadirProductoAlCarrito = (itemDelCarro, producto) => {
  const productoEnElCarrito = itemDelCarro.find(
    item => item.id === producto.id
  )
  if(productoEnElCarrito){
    return  itemDelCarro.map( item => item.id === productoEnElCarrito.id ? 
        {...item, cantidad: item.cantidad + 1 }
        : item )

  }
  return [ ...itemDelCarro, {...producto, cantidad: 1}]
};

export const eliminarProductoDelCarrito = (itemDelCarro, id) =>{
    const productoAQuitar = itemDelCarro.find(item => item.id === id)

    if(productoAQuitar?.cantidad > 1){
        return  itemDelCarro.map( item => item.id === productoAQuitar.id ? 
            {...item, cantidad: item.cantidad - 1 }
            : item )
    }
    return itemDelCarro.filter( item => item.id !== productoAQuitar?.id)
}

export const resetCostoDeEnvio = (itemDelCarro, costoDeEnvio) =>{
    if(itemDelCarro.length === 1 && itemDelCarro[0].cantidad === 1){
        return 0;

    }
}