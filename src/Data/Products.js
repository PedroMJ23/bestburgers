import hamburguesas1 from '../../src/Assets/Images/Hamburguesas.jpg'


const products = [
  {
    id: 1,
    nombre: "La clásica",
    precio: 1200,
    categoria: "Clásicas",
    desc: "Hamburbuesa simple con cheddar",
    img: hamburguesas1,
  },
  {
    id: 2,
    nombre: "Clásica Plus",
    precio: 1500,
    categoria: "Clásicas",
    desc: "Hamburguesa simple con cheddar, panceta y cebolla",
    img: hamburguesas1,
  },
  
  {
    id: 3,
    nombre: "Clásica ultra",
    precio: 1700,
    categoria: "Clásicas",
    desc: "Hamburguesa simple con cheddar, panceta, cebolla y barbacoa",
    img: hamburguesas1,
  },
  {
    id: 4,
    nombre: "La completa",
    precio: 1800,
    categoria: "Clásicas",
    desc: "Hamburguesa simple con cheddar, panceta, cebolla, tomate y lechuga",
    img:hamburguesas1,
  },
  {
    id:5,
    nombre:'Doble clásica',
    precio: 2000,
    categoria: "Dobles",
    desc: "Hamburguesa doble carne, doble cheddar",
    img: undefined
  },
  {
    id: 6,
    nombre:"Doble con panceta y cebolla",
    precio: 2100,
    categoria: "Dobles",
    desc: "Hamburguesa doble carne, doble cheddar con panceta y cebolla",
    img: undefined
  },
  {
    id:7,
    nombre:"La Barbacoa",
    precio: 2300,
    categoria: "Dobles",
    desc: "Hamburguesa doble carne, cheddar, panceta, cebolla caramelizada y salsa de barbacoa",
    img: undefined
  },
  {
    id:8,
    nombre: "Doble completa",
    precio:2500,
    categoria:"Dobles",
    desc: "Hamburguesa doble carne, cheddar, panceta, cebolla, lechuga, tomate y huevo",
    img: undefined
  },
  {
    id:9,
    nombre: "Plus Ultra",
    precio: 1500,
    categoria: "Pequeños",
    desc: "Hamburguesa simple con cheddar y papitas fritas",
    img:undefined

  },
  {
    id: 10,
    nombre: "Plus Mega",
    precio: 2000,
    categoria: "Pequeños",
    desc: "Hamburguesa simple con cheddar, papitas fritas y patitas de pollo",
    img: undefined
  }

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

