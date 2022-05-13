let i = 1;
function createElements(){


for(let li of carrusel.querySelectorAll('li')) {
  li.style.position = 'relative';
  li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
  i++;
}

/* configuración */
let width = 530; // ancho de las imágenes
let count = 2; // conteo de las imágenes visibles

let list = carrusel.querySelector('ul');
let listElems = carrusel.querySelectorAll('li');


let position = 0; // posición del desplazamiento del carrusel

carrusel.querySelector('.prev').onclick = function() {
  // desplazamiento izquierdo
  position += width * count;
  // no podemos mover demasiado a la izquierda, se acaban las imágenes
  position = Math.min(position, 0)
  list.style.marginLeft = position + 'px';
};

carrusel.querySelector('.next').onclick = function() {
  // desplazamiento derecho
  position -= width * count;
 // console.log('position',position);
  // solo se puede desplazar el carrete de imágenes (longitud total de la cinta - conteo visibles)
  position = Math.max(position, -width * (listElems.length - count));
  console.log('listElems.length',listElems.length);
  console.log('position',position);
  list.style.marginLeft = position + 'px';
};

}

export {createElements}