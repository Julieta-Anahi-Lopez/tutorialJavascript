const nombre = localStorage.getItem('nombre');
console.log(nombre);

const mesesLocalStorage = localStorage.getItem('meses');
console.log(mesesLocalStorage);
console.log(typeof(mesesLocalStorage));


console.log(JSON.parse(mesesLocalStorage));