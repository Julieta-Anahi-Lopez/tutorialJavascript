const nav = document.querySelector('.navegacion');

// registrar un evento

nav.addEventListener('click', ()=>{
    console.log('click en nav');
})

//entrando (en hoove) con el mouse
nav.addEventListener('mouseenter', ()=>{
    console.log('entrando en nav');

})

//saliendo (en hoove) con el mouse
nav.addEventListener('mouseout', ()=>{
    console.log('saliendo de nav');

    
})


//apretando con el mouse
nav.addEventListener('mousedown', ()=>{
    console.log('mousedown de nav');
   
    
})

//apretando y soltando con el mouse
nav.addEventListener('mouseup', ()=>{
    console.log('mouseup de nav');
   
    
})

//doble click con el mouse
nav.addEventListener('dblclick', ()=>{
    console.log('dblclick de nav');
   
    
})


