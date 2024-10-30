localStorage.setItem('nombre', 'Julieta');

sessionStorage.setItem('otro valor', 'Hola');


const producto = {
    nombre: 'Monitor de 24 pulgadas',
    precio: 300

}

const productoString = JSON.stringify(producto);
console.log(productoString);
sessionStorage.setItem('producto', productoString);


const meses = ['Enero', 'Febrero', 'Marzo'];
const mesesString = JSON.stringify(meses);
localStorage.setItem('meses', mesesString);
