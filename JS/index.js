
import {createElements } from "./carrusel.js"
import {categorias} from "./categorias.js"
import {generarTablero,generarTablero2,generarTablero3} from "./memoria.js"

let elementsLi = [];
let divCarrusel = document.getElementById("carouselContenedor");
let ul = document.getElementById("listaCategorias");
let iconos = []
let iconosfood = []
let iconosfamily = []


/************Elementos Memoria animals******************* */
function cargarIconos() {
    fetch('http://localhost:3000/animals')
  .then(response => response.json())  // convertir a json
  .then(function(data) {
    data.forEach(id => {
      iconos.push(id.img)
    })
  })
}

/************Elementos Memoria food******************* */
function cargarIconosfood() {
  fetch('http://localhost:3000/food')
.then(response => response.json())  // convertir a json
.then(function(data) {
  console.log('data',data);
  data.forEach(id => {
    iconosfood.push(id.img)
  })
})
}

/************Elementos Memoria family******************* */
function cargarIconosfamily() {
  fetch('http://localhost:3000/family')
.then(response => response.json())  // convertir a json
.then(function(data) {
  console.log('data',data);
  data.forEach(id => {
    iconosfamily.push(id.img)
  })
})
}

/************Elementos Categoria******************* */
fetch('http://localhost:3000/categoria')
.then(response => response.json())  // convertir a json
.then(function(data) {
    data.forEach(name => {
    elementsLi.push(name.name)
    
    const li = document.createElement('li')
    li.setAttribute('title',name.id)
    li.style.position = 'relative';
    const a = document.createElement('a')
    a.setAttribute('href','#')
    a.onclick = function(){categorias(divCarrusel,name.name,iconos,iconosfood,iconosfamily)}
    const img = document.createElement('img')
    img.setAttribute('id',name.id)
    img.setAttribute('src','/'+name.img)
    a.appendChild(img)
    li.appendChild(a)
    ul.appendChild(li)

  
createElements()
})

})


const boton = document.getElementById('Buttontablero')
boton.onclick = function(){generarTablero(iconos,'tablero1')}
generarTablero(iconos,'tablero1')

const botonfood = document.getElementById('Buttontablerofood')
botonfood.onclick = function(){generarTablero2(iconosfood,'tablero2')}
generarTablero2(iconosfood,'tablero2')

const botonfamily = document.getElementById('Buttontablerofamily')
botonfamily.onclick = function(){generarTablero3(iconosfamily,'tablero3')}
generarTablero3(iconosfamily,'tablero3')

export {cargarIconos,cargarIconosfood,cargarIconosfamily}
