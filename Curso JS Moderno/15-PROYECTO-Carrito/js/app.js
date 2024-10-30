// variables
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
let articulosCarrito = [];


cargarEventListener();
function cargarEventListener(){
    //Cuando agregas un curso preisonando "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);

    //Elimina cursos del carrito

    carrito.addEventListener('click', eliminarCurso)

    // vaciar el carrito de compras
    vaciarCarritoBtn.addEventListener('click', ()=>{
        articulosCarrito = [];
        limpiarHTML();

    })

}




//Funciones





//Agregar un curso al carrito

function agregarCurso(e){
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}


//Elimina un curso del carrito

function eliminarCurso(e){
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');

        // //Elimina del arreglo articulos carrito por el data-id
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);

        carritoHTML();

    }

}

//lee el contenido del html al que le dimos click y extrae la informacion del curso
function leerDatosCurso(curso){



    //Crear objeto con el contenido del curso actual

    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent, 
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    };



    //Revisar si un elemento existe en el carrito

    const existe = articulosCarrito.some((curso)=> curso.id === infoCurso.id);

    if (existe){
        const cursos = articulosCarrito.map((curso)=>{
            if (curso.id === infoCurso.id){
                curso.cantidad ++;
                return curso;
            } else {
                return curso; //Este retorna los objetos que no son duplicados pero siguen estando en el carrito.
            }

        });
        articulosCarrito = [...cursos];
    } else {
        articulosCarrito = [...articulosCarrito, infoCurso];
    }

    //Agrega elementos al carrito



    carritoHTML();

}


//Muestra el carrito de compras en el HTML

function carritoHTML(){

    //Limpiar el HTML

    limpiarHTML();

    //Recorre el carrito y genera el HTML
    articulosCarrito.forEach((curso)=>{
        //destructurin del objeto
        const {imagen, titulo, precio, cantidad ,id} = curso;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src=${imagen} width=100px></td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}"> X </a>
            </td>
        `;



        //agrega el html del carrito en el tbody
        contenedorCarrito.appendChild(row);
        

    })
}


function limpiarHTML(){
    //forma lenta de limpiar
    // contenedorCarrito.innerHTML = '';
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)  //En cada vuelta cheque que hay un elemento hijo. Si lo hay lo elimina. Asi hasta que firtchild sea falso(no hay elementos hijos)
    }
}