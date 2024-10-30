const btnFlotante = document.querySelector(".btn-flotante");
const footer = document.querySelector(".footer");

btnFlotante.addEventListener("click", mostrarOcultarFooter);

function mostrarOcultarFooter() {
  if (footer.classList.contains("activo")) {
    footer.classList.remove("activo");
    this.classList.remove("activo"); //this porque la funcion fue llamada por el btn flotante, ais no hace falta poner la variable
    this.textContent = 'Idioma y Moneda';
  } else {
    footer.classList.add("activo");
    this.classList.add("activo");
    this.textContent = 'X Cerrar';
  }
}

console.log(btnFlotante);
console.log(footer);


