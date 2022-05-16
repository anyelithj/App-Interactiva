
import {generarTablero,generarTablero2} from "./memoria.js"

let elementoCategoria;

function categorias(divCarrusel,id,iconos,iconosfood) {

    divCarrusel.style.display = "none";
    elementoCategoria = document.getElementById(id);
    elementoCategoria.classList.remove("ocultos");
    elementoCategoria.classList.add("mostrar");
    if(id == 'animals'){
        generarTablero(iconos,'tablero1')
    }else if(id == 'food'){
        generarTablero2(iconosfood,'tablero2')
    }
}

export {categorias}
