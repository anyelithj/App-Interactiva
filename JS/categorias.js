function categorias(divCarrusel,id) {
    divCarrusel.style.display = "none";
    let elementoCategoria = document.getElementById(id);
    console.log('elementoCategoria',id)
    elementoCategoria.classList.remove("ocultos");
    elementoCategoria.classList.add("mostrar");
}

export {categorias}