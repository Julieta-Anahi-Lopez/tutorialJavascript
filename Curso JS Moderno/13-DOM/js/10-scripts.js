const enlace = document.createElement('a');
enlace.textContent = 'nuevo enlace';

enlace.href ='/nuevo-enlace';
enlace.target = "_blank";
console.log(enlace);

const navegacion = document.querySelector('.navegacion');
// navegacion.appendChild(enlace);

// console.log(navegacion.children);

navegacion.insertBefore(enlace, navegacion.children[1] )



// Crear un CARD

const parrafo1 = document.createElement('p');
parrafo1.textContent='Concierto';
parrafo1.classList.add('categoria','concierto');




const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');



const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');


// crear div con la clase info

const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);


const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';


//crear el card padre

const card = document.createElement('div');
card.classList.add('card');

//asignar la imagen

card.appendChild(imagen);

card.appendChild(info);

console.log(card);

//insertar en el HTML

const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card);

