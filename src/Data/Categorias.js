import hamburguesaClásica from '../../src/Assets/Others/simples.png';
import hamburguesaDoble from '../../src/Assets/Others/dobles.png';
import hamburguesaPequeños from '../../src/Assets/Others/pequeños.png';

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
        img: undefined,
        nombre: 'Veggie',
        categoria: 'Veggie'
    }

]
export default CategoriasTodas;
