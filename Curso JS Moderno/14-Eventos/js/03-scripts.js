const busqueda = document.querySelector('.busqueda');

// busqueda.addEventListener('keydown', ()=>{
//     console.log('Escribiendo...');
// })

// busqueda.addEventListener('keydown', ()=>{
//     console.log('Escribiendo...');
// })

//Muy utilizado en validaciones - el evneto consiste en escribir en el teclado y SALIR del input (mouse, tab, etc9)
// busqueda.addEventListener('blur', ()=>{
//     console.log('Saliendo del input...');
// })

// Copy, cuando hago ctrl +C o CMD + C o desde el menu contextual
// busqueda.addEventListener('copy', ()=>{
//     console.log('Copiaste el texto...');
// })

// // Cut
// busqueda.addEventListener('cut', ()=>{
//     console.log('Cortaste el texto...');
// })


// // Paste
// busqueda.addEventListener('paste', ()=>{
//     console.log('Pegaste el texto...');
// })


// // Input - Cuando realizas cualqueir evento menos el blur
// busqueda.addEventListener('input', ()=>{
//     console.log('Input detecta cualquier cosa del texto...');
// })


//CAPTAR EL EVENTO
busqueda.addEventListener('input', (evt)=>{
  console.log(evt.target.value);
})


