import hamburguesas1 from '../../src/Assets/Images/Hamburguesas.jpg';
import hamburguesassimples3 from '../../src/Assets/Images/simple1.jpg';
import hamburguesassimples2 from '../../src/Assets/Images/simples2jpg';
import hamburguesassimples1 from '../../src/Assets/Images/simpleconlechuga.jpg';
import hamburguesassimples4 from '../../src/Assets/Images/Hamburguesa-simpleconpanceta.jpg';

import dobles2 from '../../src/Assets/Images/doblesimple.jpg';
import dobles3 from '../../src/Assets/Images/doblecompleta}.jpg';
import dobles1 from '../../src/Assets/Images/hamburguesa34.jpg';
import dobles4 from '../../src/Assets/Images/doblesimple.jpg';

import peques1 from '../../src/Assets/Images/peques1.jpeg';
import peques2 from '../../src/Assets/Images/peques2.jpg';



import veggie4 from '../../src/Assets/Images/veggie1.jpg';
import veggie2 from '../../src/Assets/Images/veggie2.jpg';
import veggie1 from '../../src/Assets/Images/veggie4.jpg';
import veggie3 from '../../src/Assets/Images/veggie3.jpg';



const products = [
  {
    id: 1,
    nombre: "Simple",
    precio: 1200,
    categoria: "Simples",
    desc: "Hamburbuesa simple con cheddar",
    img: hamburguesassimples1,
  },
  {
    id: 2,
    nombre: "Clásica Plus",
    precio: 1500,
    categoria: "Simples",
    desc: "Hamburguesa simple con cheddar, panceta y cebolla",
    img: hamburguesassimples2,
  },
  
  {
    id: 3,
    nombre: "Clásica ultra",
    precio: 1700,
    categoria: "Simples",
    desc: "Hamburguesa simple con cheddar, panceta, cebolla y barbacoa",
    img: hamburguesassimples3,
  },
  {
    id: 4,
    nombre: "La completa",
    precio: 1800,
    categoria: "Simples",
    desc: "Hamburguesa simple con cheddar, panceta, cebolla, tomate y lechuga",
    img:hamburguesassimples4,
  },
  {
    id:5,
    nombre:'Doble clásica',
    precio: 2000,
    categoria: "Dobles",
    desc: "Hamburguesa doble carne, doble cheddar",
    img: dobles1
  },
  {
    id: 6,
    nombre:"Doble con panceta y cebolla",
    precio: 2100,
    categoria: "Dobles",
    desc: "Hamburguesa doble carne, doble cheddar con panceta y cebolla",
    img: dobles2
  },
  {
    id:7,
    nombre:"La Barbacoa",
    precio: 2300,
    categoria: "Dobles",
    desc: "Hamburguesa doble carne, cheddar, panceta, cebolla caramelizada y salsa de barbacoa",
    img: dobles3
  },
  {
    id:8,
    nombre: "Doble completa",
    precio:2500,
    categoria:"Dobles",
    desc: "Hamburguesa doble carne, cheddar, panceta, cebolla, lechuga, tomate y huevo",
    img: dobles4
  },
  {
    id:9,
    nombre: "Plus Ultra",
    precio: 1500,
    categoria: "Peques",
    desc: "Hamburguesa simple con cheddar y papitas fritas",
    img:peques1

  },
  {
    id: 10,
    nombre: "Plus Mega",
    precio: 2000,
    categoria: "Peques",
    desc: "Hamburguesa simple con cheddar, papitas fritas y patitas de pollo",
    img: peques2
  },
  {
    id: 11,
    nombre: "Veggie simple",
    precio: 1300,
    categoria: "Veggie",
    desc: "Hamburguesa veggie simple con cheddar",
    img: veggie1
  },
  {
    id: 12,
    nombre: "Veggie Cargada",
    precio: 1500,
    categoria: "Veggie",
    desc: "Hamburguesa veggie simple con cheddar, cebolla y lechuga",
    img: veggie2
  },
  {
    id: 13,
    nombre: "Veggie Plus",
    precio: 2000,
    categoria: "Veggie",
    desc: "Hamburguesa veggie simple con cheddar, papitas fritas, cebolla caramelizada y lechuga",
    img: veggie3
  },
  {
    id: 14,
    nombre: "Super Verde",
    precio: 2300,
    categoria: "Veggie",
    desc: "Hamburguesa veggie simple con cheddar, rucula, lechuga, appio y tomate",
    img: veggie4
  },


];

export const arrayDeCat = ()=>{
  products.map( item => console.log(item.categoria))

};
//arrayDeCat();

export const ProductosPorCategoria = products.reduce((acc, product) => {
  if (!acc[product.categoria]) {
    acc[product.categoria] = [];
  }

  acc[product.categoria] = [...acc[product.categoria], product];

  return acc;
}, {});

export const CantidadDeProductosTotales = products.length;


export default products;

