import hamburguesaClásica from '../../src/Assets/Others/simples.png';
import hamburguesaDoble from '../../src/Assets/Others/dobles.png';
import hamburguesaPequeños from '../../src/Assets/Others/pequeños.png';
import hamburguesaVeggie from '../../src/Assets/Images/hamburguesa-vegana.png';

const CategoriasTodas = [
    {
        id:1,
        img:hamburguesaClásica,
        nombre: 'Simples',
        categoria: 'Simples'
    },
    {
        id:2,
        img:hamburguesaDoble,
        nombre: 'Dobles',
        categoria: 'Dobles'
    },
    {
        id:3,
        img:hamburguesaPequeños,
        nombre: 'Peques',
        categoria: 'Peques'
    },
    {
        id:4,
        img: hamburguesaVeggie,
        nombre: 'Veggie',
        categoria: 'Veggie'
    }

]
export default CategoriasTodas;
