// const encabezado = document.querySelector('h1');

// console.log(encabezado.style);

// encabezado.style.backgroundColor = 'red';

// encabezado.style.fontFamily = 'Arial';
// encabezado.style.textTransform = 'uppercase';

const card = document.querySelector('.card');
card.classList.add('nueva-clase', 'otra-clase');
card.classList.remove('otra-clase');
console.log(card.classList);
