const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);


// console.log(encabezado.innerText); // Texto Si en el css visisbility: hidden; no lo va a encontrar
// console.log(encabezado.textContent); // Texto Si lo va a encontrar
// console.log(encabezado.innerHTML);// HTML


const encabezadoTexto = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezadoTexto);


//document.querySelector('.contenido-hero h1').textContent = 'Otro texto';

const imagen =document.querySelector('.card img');

console.log(imagen);

imagen.src = 'img/hacer1.jpg';

