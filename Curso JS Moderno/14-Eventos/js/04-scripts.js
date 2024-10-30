const form = document.querySelector('#formulario');

form.addEventListener('submit', validarFormulario)

function validarFormulario(e){
    e.preventDefault();
    console.log(e);
}

