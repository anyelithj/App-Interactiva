let i = 1;
function createElements(){


for(let li of carrusel.querySelectorAll('li')) {
  li.style.position = 'relative';
  li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
  i++;
}

/* configuración */
let count=0;
let list = carrusel.querySelector('ul');
let listElems = carrusel.querySelectorAll('li');
let width;

let position = 0; // posición del desplazamiento del carrusel

carrusel.querySelector('.prev').onclick = function() {
  const img2 = document.getElementById('1'); // ancho de la primera imagen
   width = img2.clientWidth
  if(width <= 250){
    count = 1;
  }else{
    count = 2;
  }
  // desplazamiento izquierdo
  position += width * count;
  // no podemos mover demasiado a la izquierda, se acaban las imágenes
  position = Math.min(position, 0)
  list.style.marginLeft = position + 'px';
};

carrusel.querySelector('.next').onclick = function() {
  const img3 = document.getElementById('1'); // ancho de la primera imagen
  width = img3.clientWidth;
  if(width <= 250){
    count = 1;
  }else{
    count = 2;
  }
  // desplazamiento derecho
  position -= width * count;

  // (longitud total de la cinta - conteo visibles)
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
};

}

export {createElements}